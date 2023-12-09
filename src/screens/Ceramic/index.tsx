import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import Header from '../../components/Header';
import Subcategory from '../../components/Subcategory';
import {GlobalStyle} from '../../utils/styles';
import {fetchCategory} from '../../redux/categoryAPI';
import {useDispatch, useSelector} from 'react-redux';

const Ceramic = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state?.categories?.data);
  const [selectedtabIndex, setSelectedTabIndex] = useState(0);
  const [selectedtabItem, setSelectedTabItem] = useState();
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const paginationAPI = () => {
    let page = page + 1;
    dispatch(fetchCategory(state[selectedtabIndex]?.Id, page));
  };

  return (
    <View style={styles.container}>
      {/* Header with Category */}
      <Header
        onPress={(index, item) => {
          setSelectedTabIndex(index);
          setSelectedTabItem(item);
        }}
        Category={state instanceof Array ? state : []}
      />

      {/* Subcategory */}
      <FlatList
        data={
          state instanceof Array ? state[selectedtabIndex]?.SubCategories : []
        }
        contentContainerStyle={
          state && state[selectedtabIndex]?.SubCategories
            ? undefined
            : {flex: 1}
        }
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTextTitle}>No Data Available</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={GlobalStyle.itemSperator} />}
        renderItem={({item}) => <Subcategory item={item} />}
        onEndReached={() => {
          paginationAPI();
        }}
      />
      <SafeAreaView />
    </View>
  );
};

export default Ceramic;

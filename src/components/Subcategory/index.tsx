import React from 'react';
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';

const Subcategory = props => {
  const {item} = props;
  return (
    <View style={styles.Container}>
      <Text style={styles.txtTitle}>{item?.Name}</Text>
      <FlatList
        data={item.Product instanceof Array ? item?.Product : []}
        style={{marginTop: 20}}
        showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{flex: 1,}}
        horizontal
        ItemSeparatorComponent={() => <View style={{margin: 10}} />}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Image
              source={{uri: item?.ImageName}}
              resizeMode="cover"
              style={styles.productImage}
            />
            <Text style={styles.txtItemTitle}>{item?.Name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Subcategory;

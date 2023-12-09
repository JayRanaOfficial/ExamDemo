import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';

const Header = props => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../assets/Images/logo.png')}
        style={styles.logoStyle}
      />
      <FlatList
        data={props.Category}
        contentContainerStyle={{marginTop: 20}}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
              props.onPress(index, item);
              setSelectedIndex(index);
            }}>
            <Text
              style={[
                styles.txtTitle,
                index == selectedIndex ? {color: '#fff'} : {},
              ]}>
              {item?.Name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Header;

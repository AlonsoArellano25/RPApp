import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {globalStyles} from '../utils/globalStyles';

export default function StoresList(props) {
  const {stores} = props;

  const renderItem = ({item}) => (
    <View style={styles.renderItem}>
      <View>
        <Text style={globalStyles.title}> {item.name} </Text>
        <Text style={globalStyles.subTitle}> Ubicación: {item.location}</Text>
      </View>
      <Image
        source={require('../assets/img/arrow-png.png')}
        style={styles.image}
      />
    </View>
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={stores}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    alignSelf: 'flex-start',
    width: '100%',
    flex: 1,
    flexGrow: 1,
  },
  renderItem: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
});

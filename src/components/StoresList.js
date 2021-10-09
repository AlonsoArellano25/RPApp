import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {globalStyles} from '../utils/globalStyles';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';

export default function StoresList(props) {
  const {stores} = props;
  const [auxStores, setAuxStores] = useState(stores);
  const navigation = useNavigation();

  useEffect(() => {
    if (stores) {
      setAuxStores(stores);
    }
  }, [stores]);

  const handleLocal = () => {
    setAuxStores(stores.filter(store => store.local === true));
  };

  const hanldeProvincia = () => {
    setAuxStores(stores.filter(store => store.local === false));
  };

  const goStore = item => {
    navigation.navigate('Store', {store: item});
  };

  const renderItem = ({item}) => (
    <TouchableWithoutFeedback onPress={() => goStore(item)}>
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
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.listContainer}>
      <View style={styles.buttonsContainer}>
        <Button
          text="Agencias locales"
          style={styles.button2}
          onPress={handleLocal}
        />
        <Button
          text="Agencias de provincia"
          style={styles.button}
          onPress={hanldeProvincia}
        />
      </View>
      <FlatList
        data={auxStores}
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  button: {
    width: '48%',
  },
  button2: {
    width: '40%',
  },
});

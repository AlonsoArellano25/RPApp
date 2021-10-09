import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getStoresApi} from '../api/store';
import Header from '../components/Header';
import Loading from '../components/Loading';
import StoresList from '../components/StoresList';
import {AuthContext} from '../context/AuthContext';
import {globalStyles} from '../utils/globalStyles';

export default function Stores() {
  const {} = useContext(AuthContext);
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStoresApi().then(resp => {
      setStores(resp.stores);
    });
    setIsLoading(false);
  }, []);

  return (
    <View style={globalStyles.container}>
      <Header />

      <Text style={styles.title}>Listado de sucursales</Text>
      {isLoading ? <Loading /> : <StoresList stores={stores} />}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    marginVertical: 20,
  },
});

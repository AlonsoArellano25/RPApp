import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {getLocalApi} from '../api/local';
import Header from '../components/Header';
import {globalStyles} from '../utils/globalStyles';

export default function Store({route}) {
  const {store} = route.params;
  const [local, setLocal] = useState([]);

  useEffect(() => {
    getLocalApi().then(resp => {
      setLocal(resp.locales);
    });
  }, []);
  return (
    <View style={globalStyles.container}>
      <Header backFlag />
      <Text style={[globalStyles.title, globalStyles.globalMargin]}>
        {store.name}
      </Text>
      <Image
        source={require('../assets/img/real-plaza-mall.jpg')}
        style={styles.image}
      />
      <Text
        style={[globalStyles.subTitle, globalStyles.globalMargin, styles.text]}>
        Ubicación: {store.location}
      </Text>
      <Text style={[globalStyles.subTitle, styles.textLocal]}>Locales:</Text>
      {local.map(item => (
        <View key={item._id} style={styles.containerLocal}>
          <Text>-{item.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '30%',
  },
  text: {
    alignSelf: 'flex-start',
    paddingLeft: 10,
    color: '#000',
  },
  textLocal: {
    alignSelf: 'flex-start',
    paddingLeft: 10,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
  containerLocal: {
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
});

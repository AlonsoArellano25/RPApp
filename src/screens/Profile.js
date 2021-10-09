import React, {useContext} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import {AuthContext} from '../context/AuthContext';
import {COLOR_PRINCIPAL_1, COLOR_PRINCIPAL_2} from '../utils/colors';
import {globalStyles} from '../utils/globalStyles';

export default function Profile() {
  const {infoUser, logout} = useContext(AuthContext);
  console.log(JSON.stringify(infoUser, null, 3));

  const Logout = () => {
    logout();
  };
  return (
    <View style={globalStyles.container}>
      <Header backFlag />
      <View style={styles.containerPhoto}>
        <Image source={{uri: infoUser.user?.photo}} style={styles.photo} />
      </View>
      <Text style={styles.textname}>¡Bienvenido {infoUser.user?.name}! </Text>
      <Text style={styles.textEmail}>Correo: {infoUser.user?.email}! </Text>
      <Button text="Cerrar sesión" onPress={Logout} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  containerPhoto: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#000',
    borderStyle: 'dashed',
    borderRadius: 75,
    padding: 5,
  },
  textname: {
    paddingTop: 10,
    fontSize: 20,
    color: COLOR_PRINCIPAL_1,
  },
  textEmail: {
    paddingTop: 10,
    fontSize: 13,
    color: COLOR_PRINCIPAL_2,
  },
  button: {
    width: '100%',
    marginTop: 50,
  },
});

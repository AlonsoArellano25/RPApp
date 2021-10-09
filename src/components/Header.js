import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import {COLOR_PRINCIPAL_2} from '../utils/colors';

export default function Header({backFlag}) {
  const navigation = useNavigation();

  const goProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView style={styles.container}>
      {backFlag ? (
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={styles.backBtn}>
            <Image
              style={styles.backBtnImage}
              source={require('../assets/img/icon-arrow-left-1.png')}
            />
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <>
          <TouchableWithoutFeedback onPress={goProfile}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.user}
                source={require('../assets/img/icon-user-3.png')}
              />
              <Text style={styles.text}>PERFIL</Text>
            </View>
          </TouchableWithoutFeedback>
        </>
      )}
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/img/logo.png')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 5.49,
    elevation: 10,
    zIndex: 3,
  },
  logo: {
    width: 150,
    height: 70,
    resizeMode: 'contain',
  },
  user: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  profileContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 10,
  },
  text: {
    fontSize: 13,
    paddingLeft: 5,
    paddingTop: 3,
    color: COLOR_PRINCIPAL_2,
  },
  logoContainer: {},
  backBtn: {
    position: 'absolute',
    left: 10,
  },
  backBtnImage: {
    height: 20,
    resizeMode: 'contain',
  },
});

import React, {useContext} from 'react';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {globalStyles} from '../utils/globalStyles';
import Background from '../components/Background';
import Button from '../components/Button';
import {AuthContext} from '../context/AuthContext';

const Login = () => {
  const {signIn} = useContext(AuthContext);

  const _signIn = async () => {
    GoogleSignin.configure({
      scopes: [],
      webClientId:
        '777141610037-sbgnshd9lacp138sdlngp0fs5u5bgcj9.apps.googleusercontent.com',
      offlineAccess: true,
    });

    try {
      await GoogleSignin.hasPlayServices();
      const _userInfo = await GoogleSignin.signIn();
      console.log(_userInfo);
      signIn(_userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('user cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('operation (e.g. sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('play services not available or outdated');
      } else {
        console.log('some other error happened');
      }
    }
  };

  return (
    <>
      <Background />
      <View style={[globalStyles.centerContainer]}>
        <View style={styles.login}>
          <Image
            source={require('../assets/img/LogoRP.png')}
            style={styles.image}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Correo electronico"
          />
          <TextInput style={styles.textInput} placeholder="Contraseña" />
          <Button
            text="Ingresar"
            style={styles.button}
            onPress={console.log('Click')}
          />
          <GoogleSigninButton
            style={styles.googleButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={_signIn}
          />
        </View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  login: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  googleButton: {
    width: 210,
    height: 48,
  },
  button: {
    alignSelf: 'center',
    minWidth: 200,
    height: 45,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    height: 40,
    borderRadius: 5,
    marginVertical: 15,
    color: '#000',
    width: 200,
  },
});

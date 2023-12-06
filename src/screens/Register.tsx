import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Button,
} from 'react-native';

export const RegisterPage = () => {
  const navigate = useNavigation();
  return (
    <View>
      <Image
        style={{height: '100%', width: '100%'}}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.FNGiLABRfOLxFq_RKkqdKQHaEF?rs=1&pid=ImgDetMain',
        }}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={150}
        style={styles.form}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          YO COMPARTO
        </Text>
        <Text style={{color: 'white', fontSize: 25, textAlign: 'center'}}>
          ¡Registrate gratis!
        </Text>
        <View>
          <Text style={styles.texto}>Nombre(s):</Text>
          <TextInput
            style={styles.directionInput}
            placeholder="Pablo Segundo"
            placeholderTextColor="black"
          />
        </View>
        <View>
          <Text style={styles.texto}>Soy:</Text>
          <TextInput
            style={styles.directionInput}
            placeholder="Soy:"
            placeholderTextColor="black"
          />
        </View>
        <View>
          <View>
            <Text style={styles.texto}>Telefono:</Text>
            <TextInput
              style={styles.directionInput}
              keyboardType="phone-pad"
              placeholder="7225626565"
              placeholderTextColor="black"
            />
          </View>
          <View>
            <Text style={styles.texto}>Correo electronico:</Text>
            <TextInput
              style={styles.directionInput}
              keyboardType="email-address"
              placeholder="Correo@correo.com"
              placeholderTextColor="black"
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            paddingVertical: 10,
          }}>
          <View style={{paddingHorizontal: 5}}>
            <Text style={styles.texto}>Contraseña:</Text>
            <TextInput
              style={{...styles.directionInput, width: 180, fontSize: 20}}
              secureTextEntry={true}
              placeholder=""
              placeholderTextColor="black"
            />
          </View>
          <View style={{}}>
            <Text style={styles.texto}>Confirmar contraseña</Text>
            <TextInput
              style={{...styles.directionInput, width: 180, fontSize: 20}}
              secureTextEntry={true}
              placeholder=""
              placeholderTextColor="black"
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={{paddingHorizontal: 20, width: 200}}>
            <Button title="Regresar"
           onPress={() => navigate.navigate('Login')}
            />
          </View>
          <View style={{paddingHorizontal: 20, width: 200}}>
            <Button
              title="Registrarme"
              onPress={() => navigate.navigate('Home')}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {},
  directionInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 21,
    backgroundColor: 'white',
    color: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: '100%',
    //   minWidth: '80%',
    maxWidth: 400,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // marginTop: 5,
  },
  form: {
    position: 'absolute',
    top: '18%',
    width: '90%',
    alignSelf: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 15,
    paddingHorizontal: 10,
  },
});

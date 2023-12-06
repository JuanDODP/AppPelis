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

export const Login = () => {
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
          !Iniciar Seción¡
        </Text>

        <View>
          <View>
            <Text style={styles.texto}>Correo electronico:</Text>
            <TextInput
              style={styles.directionInput}
              keyboardType="email-address"
              placeholder="Correo@correo.com"
              placeholderTextColor="black"
            />
          </View>
          <View>
            <Text style={styles.texto}>Contraseña:</Text>
            <TextInput
              style={styles.directionInput}
              secureTextEntry={true}
              placeholder=""
              placeholderTextColor="black"
            />
          </View>
        </View>

        
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View style={{paddingHorizontal: 20, width: 200, top:10}}>
            <Button title="Iniciar seción"
            onPress={() => navigate.navigate('Home')}
            />
          </View>
          <View style={{paddingHorizontal: 20, width: 200, top:10}}>
            <Button
              title="Registrarme"
              onPress={() => navigate.navigate('RegisterPage')}
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
    top: '30%',
    width: '90%',
    alignSelf: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 15,
    paddingHorizontal: 10,
  },
});

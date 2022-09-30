import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

const Register = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');

  const saveData = () => {
    fetch('http://192.168.240.199:3000/users/register', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        contact: contact,
        password: password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        Alert.alert('User Saved Successfully !');
      })
      .catch(err => {
        Alert.alert('Something went wrong, Try again !');
      });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={require('../assets/image3.png')}
            style={styles.bgImage}
          />
        </View>
        <View style={{padding: 1}}>
          <View style={styles.formInput}>
            <Text
              style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>
              Register Here !
            </Text>
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              onChangeText={e => {
                setName(e);
              }}
              placeholder="Enter your full name"
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              onChangeText={e => {
                setEmail(e);
              }}
              placeholder="Enter your email address"
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              onChangeText={e => {
                setContact(e);
              }}
              placeholder="Enter your phone number"
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              onChangeText={e => {
                setPassword(e);
              }}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.formInput}>
            <TouchableOpacity style={styles.registerBtn} onPress={saveData}>
              <Text style={{textAlign: 'center', fontSize: 18, color: '#000'}}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formInput}>
            <View
              style={{
                height: 1,
                backgroundColor: '#ddd',
                width: '100%',
              }}></View>
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LoginPage');
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#FFCB42',
                  top: 11,
                }}>
                Already have an account ? Login here !
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: '100%',
    height: 250,
    bottom: 50,
  },
  formInput: {
    padding: 10,
  },
  textInput: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#AEBDCA',
    borderRadius: 10,
  },
  registerBtn: {
    padding: 15,
    backgroundColor: '#FFCB42',
    borderRadius: 30,
  },
});

export default Register;

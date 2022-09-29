import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

const Register = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={require('../assets/image1.png')}
            style={styles.bgImage}
          />
        </View>
        <View style={{padding: 10}}>
          <View style={styles.formInput}>
            <Text
              style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>
              Register Here !
            </Text>
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your full name"
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email address"
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Confirm Password"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.formInput}>
            <TouchableOpacity style={styles.registerBtn}>
              <Text style={{textAlign: 'center', fontSize: 18, color: '#fff'}}>
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
    height: 200,
  },
  formInput: {
    marginTop: 10,
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

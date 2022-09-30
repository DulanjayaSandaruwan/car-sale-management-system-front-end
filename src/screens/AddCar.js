import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function AddCar() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text
              style={{
                color: '#2C3333',
                fontSize: 25,
                fontWeight: 'bold',
                textAlign: 'left',
                left: 10,
                top: 25,
              }}>
              Add Car
            </Text>
            <TouchableOpacity style={{left: 350}}>
              <Image
                source={require('../assets/setting.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{padding: 10}}>
          <View style={styles.formInput}>
            <Text
              style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>
              Add a new car
            </Text>
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter car Reg No."
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter car brand"
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter car price"
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter fuel type"
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter transmission type"
            />
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity
              style={styles.loginBtn}>
              <Text style={{textAlign: 'center', fontSize: 18, color: '#000'}}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#FFCB42',
    height: 90,
    width: '100%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  formInput: {
    marginTop: 10,
    padding: 10,
  },
  textInput: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#AEBDCA',
  },
  loginBtn: {
    padding: 15,
    backgroundColor: '#FFCB42',
    borderRadius: 30,
  },
});

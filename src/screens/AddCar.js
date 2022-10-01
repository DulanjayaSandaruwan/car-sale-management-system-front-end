import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';

export default function AddCar() {
  const navigation = useNavigation();

  const [carObj, setCarObj] = useState({
    image: '',
    regNo: '',
    brand: '',
    price: '',
    fuelType: '',
    transmissionType: '',
  });

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
            <TextInput
              style={styles.textInput}
              placeholder="Image"
              value={carObj.image}
              editable={false}
            />
          </View>
          <View style={styles.addImageBtn}>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={async e => {
                const result = await launchImageLibrary({
                  mediaType: 'photo',
                  selectionLimit: 13,
                });
                let images = result.assets;
                images.forEach(e => {
                  let uri = e.uri;
                  console.log(uri);
                  setCarObj(prevState => {
                    return {
                      ...carObj,
                      image: uri,
                    };
                  });
                });
              }}>
              <Text style={{textAlign: 'center', fontSize: 14, color: '#000'}}>
                Upload Image
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formInput}>
            <TextInput
              onChangeText={e => {
                setCarObj(prevState => {
                  return {
                    ...carObj,
                    regNo: e,
                  };
                });
              }}
              value={carObj.regNo}
              style={styles.textInput}
              placeholder="Enter car Reg No."
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              onChangeText={e => {
                setCarObj(prevState => {
                  return {
                    ...carObj,
                    brand: e,
                  };
                });
              }}
              value={carObj.brand}
              style={styles.textInput}
              placeholder="Enter car brand"
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              onChangeText={e => {
                setCarObj(prevState => {
                  return {
                    ...carObj,
                    price: e,
                  };
                });
              }}
              value={carObj.price}
              style={styles.textInput}
              placeholder="Enter car price"
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              onChangeText={e => {
                setCarObj(prevState => {
                  return {
                    ...carObj,
                    fuelType: e,
                  };
                });
              }}
              value={carObj.fuelType}
              style={styles.textInput}
              placeholder="Enter fuel type"
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              onChangeText={e => {
                setCarObj(prevState => {
                  return {
                    ...carObj,
                    transmissionType: e,
                  };
                });
              }}
              value={carObj.transmissionType}
              style={styles.textInput}
              placeholder="Enter transmission type"
            />
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity
              onPress={async e => {
                console.log(carObj);
                const res = await fetch('http://192.168.240.199:3000/car', {
                  method: 'POST',
                  body: JSON.stringify(carObj),
                  headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                  },
                })
                  .then(res => {
                    console.log(res);
                    Alert.alert('Car Saved Successfully');
                  })
                  .catch(res => {
                    console.log(res);
                    Alert.alert('Car Saving is Unsuccessful');
                  });
              }}
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
    marginTop: 3,
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
  imageMain: {
    width: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#FFCB42',
    backgroundColor: '#eee',
    width: '60%',
    height: 100,
  },
  addImageBtn: {
    margin: 8,
    backgroundColor: '#FFCB42',
    borderRadius: 20,
    width: 170,
    height: 45,
    left: 90,
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
});

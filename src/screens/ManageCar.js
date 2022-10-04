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
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {storeCar} from './StoreCar';
import {launchImageLibrary} from 'react-native-image-picker';

export default function AddCar() {
  const navigation = useNavigation();

  const [carObj, setCarObj] = useState({
    image: '',
    regNo: '',
    brand: '',
    price: '',
    fuelType: '',
    date: '',
    location: '',
  });

  useEffect(() => {
    setCarObj(() => {
      return {
        ...carObj,
        regNo: storeCar.regNo,
      };
    });
  }, []);

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
              Manage Car
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
              style={styles.imageContainer}
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
          <View style={styles.form}>
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
                      date: e,
                    };
                  });
                }}
                value={carObj.date}
                style={styles.textInput}
                placeholder="Enter Date"
              />
            </View>
            <View style={styles.formInput}>
              <TextInput
                onChangeText={e => {
                  setCarObj(prevState => {
                    return {
                      ...carObj,
                      location: e,
                    };
                  });
                }}
                value={carObj.location}
                style={styles.textInput}
                placeholder="Enter location"
              />
            </View>
          </View>
          <View style={styles.btn}>
            <View style={styles.formInput}>
              <TouchableOpacity
                onPress={async e => {
                  carObj.regNo != ''
                    ? fetch(
                        'http://192.168.240.199:3000/car?regNo=' + carObj.regNo,
                        {
                          method: 'PUT',
                          body: JSON.stringify(carObj),
                          headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                          },
                        },
                      )
                        .then(res => {
                          console.log(res);
                          Alert.alert('Car Updated Successfully');
                        })
                        .catch(res => {
                          console.log(res);
                          Alert.alert('Car Updating is Unsuccessful');
                        })
                    : Alert.alert('Please Fill Relevant Fields');
                }}
                style={{left: 260}}>
                <Image
                  source={require('../assets/update.png')}
                  style={{width: 35, height: 35}}
                />
                <Text style={{color: '#FF884B', fontSize: 16}}>Update</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.formInput}>
              <TouchableOpacity
                onPress={async e => {
                  carObj.regNo != ''
                    ? fetch(
                        'http://192.168.240.199:3000/car?regNo=' + carObj.regNo,
                        {
                          method: 'DELETE',
                        },
                      )
                        .then(res => {
                          console.log(res);
                          Alert.alert('Car Deleted Successfully');
                        })
                        .catch(res => {
                          console.log(res);

                          Alert.alert('Car Deleting is Unsuccessful');
                        })
                    : Alert.alert('Please Fill Relevant Fields');
                }}
                style={{left: 320, bottom: 75}}>
                <Image
                  source={require('../assets/delete.png')}
                  style={{width: 35, height: 35}}
                />
                <Text style={{color: '#FF884B', fontSize: 16}}>Delete</Text>
              </TouchableOpacity>
            </View>
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
    bottom: 20,
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
  addImageBtn: {
    margin: 8,
    backgroundColor: '#FFCB42',
    borderRadius: 20,
    width: 120,
    height: 45,
    left: 235,
    bottom: 113,
  },
  imageContainer: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#FFCB42',
    backgroundColor: '#eee',
    width: '60%',
    height: 100,
  },
  form: {
    bottom: 60,
  },
  btn: {
    bottom: 50
  }
});

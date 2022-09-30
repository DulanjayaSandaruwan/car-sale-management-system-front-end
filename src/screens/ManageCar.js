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
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';

export default function AddCar({image, onImagePicked}) {
  const navigation = useNavigation();

  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    if (image) {
      console.log('useEffect: ' + image);
      setSelectedImage({uri: image});
    }
  }, [image]);

  pickImageHandler = () => {
    ImagePicker.showImagePicker(
      {title: 'Pick an Image', maxWidth: 800, maxHeight: 600},
      response => {
        if (response.error) {
          console.log('image error');
        } else {
          console.log('Image: ' + response.uri);
          setSelectedImage({uri: response.uri});
          onImagePicked({uri: response.uri});
        }
      },
    );
  };

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
          <View style={styles.imageMain}>
            <View style={styles.imageContainer}>
              <Image source={selectedImage} style={styles.previewImage} />
            </View>
            <View style={styles.addImageBtn}>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={this.pickImageHandler}>
                <Text
                  style={{textAlign: 'center', fontSize: 12, color: '#000'}}>
                  Upload Image
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter car Reg No."
            />
          </View>
          <View style={styles.formInput}>
            <TextInput style={styles.textInput} placeholder="Enter car brand" />
          </View>
          <View style={styles.formInput}>
            <TextInput style={styles.textInput} placeholder="Enter car price" />
          </View>
          <View style={styles.formInput}>
            <TextInput style={styles.textInput} placeholder="Enter fuel type" />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter transmission type"
            />
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity style={styles.loginBtn}>
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
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
});

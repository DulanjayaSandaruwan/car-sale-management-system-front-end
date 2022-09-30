import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
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
            Home
          </Text>
          <TouchableOpacity style={{left: 350}}>
            <Image
              source={require('../assets/setting.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.formInput}>
        <TouchableOpacity
          style={styles.addCarBtn}
          onPress={() => {
            navigation.navigate('AddCar');
          }}>
          <Text style={{textAlign: 'center', fontSize: 20, color: '#000'}}>
            Add New Car
          </Text>
        </TouchableOpacity>
      </View>
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
    top: 690,
    padding: 10,
  },
  addCarBtn: {
    padding: 15,
    backgroundColor: '#FFCB42',
    borderRadius: 30,
  },
});

import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';

export default function OnboardingScreen() {
  const navigation = useNavigation();

  return (
    <Swiper style={styles.wrapper}>
      <View style={styles.slide1}>
        <Text style={{bottom: 200, fontSize: 25, fontWeight: 'bold'}}>
          Welcome To The Automotive Cars !
        </Text>
        <Image
          style={{height: 250, width: 350}}
          source={require('../assets/image1.png')}
        />
        <TouchableOpacity>
          <Text style={{top: 215, left: 150}}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.slide2}>
        <Text style={{bottom: 200, fontSize: 25, fontWeight: 'bold'}}>
          Welcome To The Automotive Cars !
        </Text>
        <Image
          style={{height: 250, width: 300}}
          source={require('../assets/image2.png')}
        />
        <TouchableOpacity>
          <Text style={{top: 210, left: 150}}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.slide3}>
        <Text style={{bottom: 185, fontSize: 25, fontWeight: 'bold'}}>
          Welcome To The Automotive Cars !
        </Text>
        <Image
          style={{height: 250, width: 350}}
          source={require('../assets/image3.png')}
        />
        <TouchableOpacity
          style={styles.startBtn}
          onPress={() => {
            navigation.navigate('LoginPage');
          }}>
          <Text style={{textAlign: 'center', fontSize: 20, color: '#000'}}>
            Getting Start
          </Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  startBtn: {
    padding: 12,
    width: 300,
    top: 90,
    backgroundColor: '#FFCB42',
    borderRadius: 10,
  },
});

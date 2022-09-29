import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';

const Splash = () => {
  const [isGo, setIsGo] = useState(true);
  const Navigation = useNavigation();

  useEffect(() => {
    if (isGo == true) {
      setTimeout(() => {
        Navigation.navigate('OnboardingScreen');
        setIsGo(false);
      }, 2000);
    }
  });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFCB42'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../assets/splash.png')}
          style={{width: 100, height: 100}}
        />
      </View>
      <View
        style={{bottom: 300, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
          AUTOMOTIVE CARS
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

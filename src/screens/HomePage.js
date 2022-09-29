import {View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function HomePage() {
  return (
    <SafeAreaView>
      <ScrollView>
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
            <TouchableOpacity style={{left:350}}>
              <Image source={require('../assets/setting.png')} style={{width:30, height:30}}/>
            </TouchableOpacity>
        </View> 
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFCB42',
    height: 90,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  PixelRatio,
  TextInput,
} from 'react-native';
import {Button, Flex, NativeBaseProvider} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {storeCar} from './StoreCar';

export default function HomePage() {
  const navigation = useNavigation();

  const [dataList, setDataList] = useState([]);

  const [resizableBlock, setResizableBlock] = useState(40);
  const [displayForResizing, setDisplayForResizing] = useState('none');

  const [checkSelectedCarReg, setCheckSelectedCarReg] = useState(null);

  const [searchTxt, setSearchTxt] = useState(null);

  const loadData = async () => {
    dataList.splice(0, dataList.length);
    let res = await fetch('http://192.168.240.199:3000/car', {method: 'GET'})
      .then(async res => {
        let arr = await res.json();
        console.log(arr);
        setDataList(arr);
      })
      .catch(async res => {});
  };

  useEffect(() => {
    loadData();
  }, [dataList]);

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
          <View style={styles.formInput}>
            <TextInput
              style={styles.textInput}
              onChangeText={async e => {
                setSearchTxt(e);
                if (e == '') {
                  loadData();
                }
              }}
              value={searchTxt}
              placeholder="Enter Date/Location"
            />
          </View>
          <TouchableOpacity
            onPress={async () => {
              console.log(searchTxt);
              searchTxt == ''
                ? loadData()
                : await fetch(
                    'http://192.168.240.199:3000/car/search?location=' +
                      searchTxt +
                      '&date=' +
                      searchTxt,
                    {
                      method: 'GET',
                    },
                  )
                    .then(async res => {
                      let arr = await res.json();
                      console.log(arr);
                      setDataList(arr);
                    })
                    .catch(async res => {});
            }}
            style={{left: 340, bottom: 70}}>
            <Image
              source={require('../assets/search.png')}
              style={{width: 40, height: 30}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.addNewCarBtn}>
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
      <NativeBaseProvider>
        <FlatList
          style={{
            position: 'absolute',
            top: 30,
          }}
          data={dataList}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                position: 'relative',
                borderWidth: 1,
                borderColor: '#FFCB42',
                marginBottom: '1%',
                padding: 5,
                height:
                  item.regNo === checkSelectedCarReg
                    ? PixelRatio.getPixelSizeForLayoutSize(resizableBlock)
                    : PixelRatio.getPixelSizeForLayoutSize(40),
                display: 'flex',
                flexDirection: 'column',
              }}
              onLongPress={() => {
                setResizableBlock(40);
                setDisplayForResizing('none');
              }}
              onPress={() => {
                setResizableBlock(60);
                setDisplayForResizing('flex');
                setCheckSelectedCarReg(item.regNo);
              }}>
              <Flex
                flexDirection={'row'}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: PixelRatio.getPixelSizeForLayoutSize(36),
                }}>
                <Flex
                  flexDirection={'row'}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                  }}>
                  <Flex
                    style={{
                      position: 'relative',
                      width: '50%',
                      height: '100%',
                    }}>
                    <Image
                      resizeMode="stretch"
                      source={{uri: item.image}}
                      style={{width: '100%', height: '100%'}}></Image>
                  </Flex>
                  <Flex
                    flexDirection={'column'}
                    style={{
                      width: '50%',
                      height: '100%',
                    }}>
                    <Flex
                      style={{
                        width: '100%',
                        height: '35%',
                      }}>
                      <Text
                        color={'white'}
                        fontSize={'sm'}
                        style={{marginBottom: 5, marginLeft: '10%'}}>
                        Brand : {item.brand}
                      </Text>
                    </Flex>
                    <Flex
                      style={{
                        width: '100%',
                        height: '35%',
                      }}>
                      <Text
                        color={'white'}
                        fontSize={'sm'}
                        style={{marginBottom: 5, marginLeft: '10%'}}>
                        Reg No : {item.regNo}
                      </Text>
                    </Flex>
                    <Flex
                      style={{
                        width: '100%',
                        height: '35%',
                        justifyContent: 'center',
                      }}>
                      <Text
                        color={'white'}
                        fontSize={'sm'}
                        style={{marginBottom: 5, marginLeft: '10%'}}>
                        Price : {item.price}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                flexDirection={'row'}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: PixelRatio.getPixelSizeForLayoutSize(20),
                  display:
                    item.regNo === checkSelectedCarReg
                      ? displayForResizing
                      : 'none',
                }}>
                <Flex
                  flexDirection={'row'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                  }}>
                  <Button
                    fontSize={'sm'}
                    style={{height: '80%'}}
                    backgroundColor="#FFCB42"
                    borderLeftRadius={5}
                    onPress={e => {
                      storeCar.regNo = item.regNo;
                      navigation.navigate('ManageCar');
                    }}>
                    Manage Details
                  </Button>
                </Flex>
              </Flex>
            </TouchableOpacity>
          )}
        />
      </NativeBaseProvider>
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
  addNewCarBtn: {
    top: 690,
    padding: 10,
  },
  addCarBtn: {
    padding: 15,
    backgroundColor: '#FFCB42',
    borderRadius: 30,
  },
  textInput: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#AEBDCA',
    width: 230,
    left: 145,
    backgroundColor: '#fff',
  },
  formInput: {
    marginTop: 1,
    padding: 10,
    bottom: 20,
  },
});

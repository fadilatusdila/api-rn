import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Beranda = () => {
  const [dataB, setDataB] = useState([
    {
      judul: 'Kemeja',
      image: require('../images/l1.jpeg'),
    },
    {
      judul: 'Jam Tangan',
      image: require('../images/l2.jpeg'),

    },
    {
      judul: 'Kaos',
      image: require('../images/l3.jpeg'),
    },
    {
      judul: 'Sarung',
      image: require('../images/l4.jpeg'),
    },
    {
      judul: 'Gamis',
      image: require('../images/p1.jpeg'),
    },
  ]);

  const [daftarRekomendasi, setDaftarRekomendasi] = useState([
    {
      judul: 'Lagi Diskon',
      deskripsi: 'Diskon hingga 80%',
      image: require('../images/v1.jpeg'),
    },
    {
      judul: 'Paling Banyak Dicari',
      deskripsi: 'Pasikan anda membeli sebelum kehabisan',
      image: require('../images/v2.jpeg'),
    },
   
  ]);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="light-content" />
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#3880ff',
            borderBottomLeftRadius: 30,
            paddingBottom: 10,
            elevation: 5,
          }}>
          <View style={{marginHorizontal: 20, marginTop: 10}}>
            <Text style={{color: '#FFFFFF'}}>Selamat Berbelanja</Text>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: '#FFFFFF'}}>
              TOKODILA
            </Text>
          </View>

          <View style={{marginLeft: 20, marginTop: 20}}>
            <FlatList
              data={daftarRekomendasi}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#A9A9A9',

                    marginTop: 10,
                    flexDirection: 'row',
                    marginRight: 20,
                    elevation: 3,
                    padding: 10,
                    marginBottom: 10,
                    borderRadius: 5,
                  }}>
                  <View style={{marginRight: 10, width: 200}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: '#212121',
                      }}>
                      {item.judul}
                    </Text>
                    <Text style={{fontSize: 14}}>{item.deskripsi}</Text>
                  </View>
                  <View>
                    <Image
                      source={item.image}
                      style={{width: 130, height: 150, borderRadius: 5}}
                      resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>

        <View style={{marginLeft: 20, marginTop: 20}}>
          <View style={{flexDirection: 'row', marginRight: 10}}>
            <Text style={{fontWeight: 'bold', color: '#212121'}}>
              Flash Shale
            </Text>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={dataB}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  width: 150,
                  backgroundColor: '#A9A9A9',

                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  marginTop: 10,
                }}>
                <Image
                  source={item.image}
                  style={{width: 130, height: 150, borderRadius: 5}}
                  resizeMode="contain"
                />
                <Text style={{fontWeight: 'bold'}}>{item.judul}</Text>
                <Text style={{fontSize: 14}}>{item.author}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={{marginLeft: 20, marginTop: 20, marginBottom: 20}}>
          <View style={{flexDirection: 'row', marginRight: 10}}>
            <Text style={{fontWeight: 'bold', color: '#212121'}}>Gratis Ongkir</Text>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={dataB}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  width: 150,
                  backgroundColor: '#A9A9A9',

                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  marginTop: 10,
                }}>
                <Image
                  source={item.image}
                  style={{width: 130, height: 150, borderRadius: 5}}
                  resizeMode="contain"
                />
                <Text style={{fontWeight: 'bold'}}>{item.judul}</Text>
                <Text style={{fontSize: 14}}>{item.author}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>

      <View style={{flexDirection: 'row', paddingVertical: 8}}>
        
      </View>
    </View>
  );
};

export default Beranda;

import { View, Text, TouchableOpacity, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { material } from 'react-native-typography';

const MenuCards = ({ navigation }) => {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await fetch('https://covid19.mathdro.id/api');
    let data = await res.json();
    setData(data);
    setIsLoading(false);
  };


  const getWidth = (x) => {
    if (isLoading) {
      return 0;
    } else {
      if (x == 'deaths') {
        const num = Math.floor(
          (Data.deaths.value / Data.confirmed.value) * 100,
        );
        const percent = num + '%';
        return percent;
      } else if (x == 'recovered') {
        const num = Math.floor(
          (Data.recovered.value / Data.confirmed.value) * 100,
        );
        const percent = num + '%';
        return percent;
      }
    }
  };

  return (
    <>
      <View style={{ flexDirection: 'row', height: 98, marginBottom: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.push('Global')}
          style={{
            backgroundColor: '#EAB543',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <Icon
            style={{ position: 'absolute', top: 10, right: 10 }}
            name="stats-chart"
            size={35}
            color="#fff"
          />
          <Text
            style={{
              position: 'absolute',
              left: 5,
              ...material.display2White,
              fontSize: 30
            }}>
            Your State Covid Info
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.push('Time')}
          style={{
            backgroundColor: '#82589F',
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <Icon
            style={{ position: 'absolute', top: 10, right: 10 }}
            name="medical"
            size={35}
            color="#fff"
          />
          <Text
            style={{
              position: 'absolute',
              left: 5,
              ...material.display2White,
              fontSize: 30
            }}>
            Daily Cases Report
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', height: 95, marginBottom: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.push('Search')}
          style={{
            backgroundColor: '#58B19F',
            borderWidth: 0,
            borderRadius: 7,
            flex: 1,
            marginHorizontal: 12,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          }}>
          <Icon
            style={{ position: 'absolute', top: 10, right: 10 }}
            name="search"
            size={35}
            color="#fff"
          />

          <Text
            style={{
              position: 'absolute',
              left: 5,
              ...material.display2White,
              fontSize: 30
            }}>
            SEARCH
          </Text>
        </TouchableOpacity>
      </View>


    </>
  );
};
export default MenuCards;

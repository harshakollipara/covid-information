import React from 'react';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { StyleSheet, StatusBar, View, SafeAreaView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { material } from 'react-native-typography';
import { Divider } from 'react-native-elements';

export default function SearchDetailsScreen({ route, navigation }) {
  const { data } = route.params;

  const getWidth = (num) => {
    const x = Math.floor((num / data.confirmed) * 100);
    const percent = x + '%';
    return percent;
  };

  function condition(data) {
    if (data.confirmed >= 1000000) {
      return (
        <Text
          style={{
            alignSelf: 'flex-end',
            ...material.captionWhite,
            backgroundColor: 'red',
            padding: 5,
            borderRadius: 5,
          }}>
          RED ZONE
        </Text>
      );
    } else if (data.confirmed < 1000000 && data.confirmed >= 50000) {
      return (
        <Text
          style={{
            alignSelf: 'flex-end',
            ...material.captionWhite,
            backgroundColor: 'orange',
            padding: 5,
            borderRadius: 5,
          }}>
          ORANGE ZONE
        </Text>
      );
    } else {
      return (
        <Text
          style={{
            alignSelf: 'flex-end',
            ...material.captionWhite,
            backgroundColor: 'green',
            padding: 5,
            borderRadius: 5,
          }}>
          GREEN ZONE
        </Text>
      );
    }
  }

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={{ backgroundColor: 'lightgrey', flex: 1 }}>
        <View
          style={{
            height: 200,
            width: '100%',
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <TouchableOpacity
            style={{
              top: 10,
              left: 10,
              height: 55,
              width: 100,
              flexDirection: 'row',
              zIndex: 999999999,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="back" size={24} color="#000" />
            <Text style={{ ...material.headline, marginLeft: 5 }}>Back</Text>
          </TouchableOpacity>
          <View style={{ position: 'absolute', bottom: 10, right: 20 }}>
            {condition(data)}
            <Text style={{ ...material.display3Object, textAlign: 'right', color: 'white' }}>
              {data.state.substring(0, 30)}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginHorizontal: 20,
            marginTop: 20,
            height: 100,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Text
            style={{
              position: 'absolute',
              left: 15,
              top: 10,
              color: 'black',
              ...material.body2Object,
              fontSize: 15,
            }}>
            Active Cases
          </Text>
          <Text
            style={{
              ...material.headlineObject,
              textAlign: 'left',
              position: 'absolute',
              left: 10,
              bottom: 15,
              fontSize: 45,
              lineHeight: 50,
              color: 'darkblue'
            }}>
            {data.active}
          </Text>
          <Divider
            style={{
              width: getWidth(data.active),
              height: 10,
              backgroundColor: 'darkblue',
              position: 'absolute',
              bottom: 0,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginHorizontal: 20,
            marginTop: 20,
            height: 100,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Text
            style={{
              position: 'absolute',
              left: 15,
              top: 10,
              color: 'black',
              ...material.body2Object,
              fontSize: 15,
            }}>
            Confirmed Cases
          </Text>
          <Text
            style={{
              position: 'absolute',
              right: 15,
              top: 10,
              color: 'black',
              ...material.body2Object,
              fontSize: 15,
            }}>
            Today
          </Text>
          <Text
            style={{
              ...material.headlineObject,
              textAlign: 'left',
              position: 'absolute',
              left: 10,
              bottom: 15,
              fontSize: 45,
              lineHeight: 50,
              color: 'orange'
            }}>
            {data.confirmed}
          </Text>
          <Text
            style={{
              ...material.headlineObject,
              textAlign: 'left',
              position: 'absolute',
              right: 10,
              bottom: 15,
              fontSize: 45,
              lineHeight: 50,
              color: 'orange'
            }}>
            +{data.deltaconfirmed}
          </Text>
          <Divider
            style={{
              width: getWidth(data.confirmed),
              height: 10,
              backgroundColor: 'orange',
              position: 'absolute',
              bottom: 0,
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            marginHorizontal: 20,
            marginTop: 20,
            height: 100,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Text
            style={{
              position: 'absolute',
              left: 15,
              top: 10,
              color: 'black',
              ...material.body2Object,
              fontSize: 15,
            }}>
            Recovered Cases
          </Text>
          <Text
            style={{
              position: 'absolute',
              right: 15,
              top: 10,
              color: 'black',
              ...material.body2Object,
              fontSize: 15,
            }}>
            Today
          </Text>
          <Text
            style={{
              ...material.headlineObject,
              textAlign: 'left',
              position: 'absolute',
              left: 10,
              bottom: 15,
              fontSize: 45,
              lineHeight: 50,
              color: 'green'
            }}>
            {data.recovered}
          </Text>
          <Text
            style={{
              ...material.headlineObject,
              textAlign: 'left',
              position: 'absolute',
              right: 10,
              bottom: 15,
              fontSize: 45,
              lineHeight: 50,
              color: 'green'
            }}>
            +{data.deltarecovered}
          </Text>
          <Divider
            style={{
              width: getWidth(data.recovered),
              height: 10,
              backgroundColor: 'green',
              position: 'absolute',
              bottom: 0,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginHorizontal: 20,
            marginTop: 20,
            height: 100,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <Text
            style={{
              position: 'absolute',
              left: 15,
              top: 10,
              color: 'black',
              ...material.body2Object,
              fontSize: 15,
            }}>
            Deaths Cases
          </Text>
          <Text
            style={{
              position: 'absolute',
              right: 15,
              top: 10,
              color: 'black',
              ...material.body2Object,
              fontSize: 15,
            }}>
            Today
          </Text>
          <Text
            style={{
              ...material.headlineObject,
              textAlign: 'left',
              position: 'absolute',
              left: 10,
              bottom: 15,
              fontSize: 45,
              lineHeight: 50,
              color: 'red'
            }}>
            {data.deaths}
          </Text>
          <Text
            style={{
              ...material.headlineObject,
              textAlign: 'left',
              position: 'absolute',
              right: 10,
              bottom: 15,
              fontSize: 45,
              lineHeight: 50,
              color: 'red'
            }}>
            +{data.deltadeaths}
          </Text>
          <Divider
            style={{
              width: getWidth(data.deaths),
              height: 10,
              backgroundColor: 'red',
              position: 'absolute',
              bottom: 0,
            }}
          />
        </View>

        <View style={{ margin: 10 }}>
          <Text style={{ ...material.caption, textAlign: 'center' }}>
            Last updated on: {data.lastupdatedtime}
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 95,
            marginVertical: 5,
          }}>
          <Text style={{ color: 'grey', ...material.caption }}>
            Harsha Kollipara
            </Text>

        </View>
      </SafeAreaView>
    </>
  );
}

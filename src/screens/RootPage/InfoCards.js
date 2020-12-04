import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

const InfoCards = () => (
  <>

    <Image
      resizeMode="cover"
      containerStyle={{
        borderRadius: 7,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        height: 115,
        borderWidth: 0,
        width: 350,
        marginRight: 10,
      }}
      source={require('../../assets/banner-covid.jpg')}
      PlaceholderContent={
        <ActivityIndicator
          style={{ height: '100%' }}
          size="large"
          color="black"
        />
      }
    />

    <Image
      resizeMode="cover"
      containerStyle={{
        borderRadius: 7,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        height: 135,
        borderWidth: 0,
        width: 350,
        marginRight: 10,
      }}
      source={require('../../assets/symptoms.jpg')}
      PlaceholderContent={
        <ActivityIndicator
          style={{ height: '100%' }}
          size="large"
          color="black"
        />
      }
    />



  </>
);

export default InfoCards;

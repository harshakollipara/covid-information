import React, { Component } from 'react';
import { StatusBar, View, ScrollView, Text } from 'react-native';
import { material } from 'react-native-typography';

import Header from './RootPage/Header';
import InfoCards from './RootPage/InfoCards';
import MenuCards from './RootPage/MenuCards';

class RootPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <ScrollView style={{ backgroundColor: '#fff' }}>
          <Header />
          <ScrollView
            horizontal
            scrollEnabled
            pagingEnabled
            decelerationRate="fast"
            snapToInterval={330}
            contentContainerStyle={{
              // height: height / 4.5,
              height: 125,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              marginHorizontal: 10,
            }}>
            <InfoCards />
          </ScrollView>

          <View

            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: '#fff',

              display: 'flex',
            }}>
            <MenuCards navigation={navigation} />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 455,
              marginVertical: 5,
            }}>
            <Text style={{ color: 'grey', ...material.caption }}>
              Harsha Kollipara
            </Text>

          </View>

        </ScrollView>
      </>
    );
  }
}

export default RootPage;

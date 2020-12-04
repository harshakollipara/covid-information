import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export function DrawerContent(props) {
  return (
    <View style={styles.drawer}>
      <Image style={styles.image}
        source={require('../assets/virus.jpg')}
      />
      {/* <Icon style={styles.icon} name="meh" size={100} color="#000" /> */}

      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('Root');
        }}>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('Search');
        }}>
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('Global');
        }}>
        <Text style={styles.text}>Info</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('Time');
        }}>
        <Text style={styles.text}>Cases</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          BackHandler.exitApp();
        }}>
        <Text style={styles.text}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  links: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  text: {
    fontSize: 25,
    color: '#000',
  },
  icon: {
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 50,
  },
  image: {
    height: '20%',
    width: '100%',
  },
});

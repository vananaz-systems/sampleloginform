import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('./assets/Logo.png')}/>
        </View>
        <View style={{
          ...styles.formItem,
          backgroundColor: colors.white,
          borderColor: colors.lightPurple,
          borderWidth: 1,
        }}>
        </View>
        <TouchableOpacity
          style={{
            ...styles.formItem,
            backgroundColor: colors.lightPurple
          }}
          onPress={() => alert('Signed In')}
        >
          <Text style={{fontSize: 30, color: colors.white}}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const colors = {
  darkPurple: '#341B67',
  lightPurple: '#7150B0',
  backgroundColor: '#FAF8FF',
  darkGray: '#363636',
  lightGray: '#DBDBDB',
  red: '#D11C34',
  white: '#FFFFFF',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  formItem: {
    height: 50,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});



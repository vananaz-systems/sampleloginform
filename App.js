import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loginInputText: 'test' };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
          <Image
            source={require('./assets/Logo.png')}/>
        </View>
          <View
            style = {{
              marginBottom: 20,
              width: '100%',
            }}>
          <View
            style={{
              alignSelf: 'start',
              marginBottom: 5,
            }}
          >
            <Text style={{
              fontSize: 20,
            }}>
              Email
            </Text>
          </View>
          <View style={{
            ...styles.formItem,
            backgroundColor: colors.white,
            borderColor: colors.lightPurple,
            borderWidth: 1,
          }}>
            <TextInput
              style={{
                fontSize: 20,
                height: 40,
                width: '100%',
                paddingHorizontal: 10,
                color: colors.black,
              }}
              onChangeText={(text) => this.setState({loginInputText: text})}
              value={this.state.loginInputText}
            />
          </View>
          <View
            style={{
              alignSelf: 'start',
              marginVertical: 2,
            }}
          >
            <Text style={{
              fontSize: 14,
              fontStyle: 'italic',
              color: colors.red,

            }}>
              not correct format for email address
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            ...styles.formItem,
            backgroundColor: colors.lightPurple,
          }}
          onPress={() => alert('Signed In')}
        >
          <Text style={{fontSize: 25, color: colors.white}}>Sign In</Text>
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



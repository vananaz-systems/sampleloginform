import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailTouched: false,
      emailInputText: '',
    };
  }

  validateEmail = (text) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.emailInputText.length === 0 ) {
      return 'this field is required';
    }
    if (!emailRegex.test(this.state.emailInputText)) {
      return 'not correct format for email address';
    }
    return '';
  }

  render() {
    let emailErrorMessage = '';

    if (this.state.emailTouched) {
      emailErrorMessage = this.validateEmail(this.state.emailInputText);
    }

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
              marginBottom: 5,
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
              keyboardType='email-address'
              autoCapitalize='none'
              placeholder='Input email address'
              placeholderTextColor={colors.lightGray}
              onChangeText={(text) => this.setState({emailInputText: text, emailTouched: true})}
              value={this.state.emailInputText}
            />
          </View>
          <View
            style={{
              alignSelf: 'start',
              height: 15,
              marginVertical: 2,
            }}
          >
            <Text style={{
              fontSize: 14,
              fontStyle: 'italic',
              color: colors.red,

            }}>
              {emailErrorMessage}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            ...styles.formItem,
            backgroundColor: colors.lightPurple,
            marginBottom: 40,
          }}
          onPress={() => {
            this.setState({emailTouched: true});
            if (this.validateEmail(this.state.emailInputText) === '') {
              alert('Signed In');
            }
          }}
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



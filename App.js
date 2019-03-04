import React from 'react';
import { TouchableOpacity, View, Image, Text, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailTouched: false,
      emailInputText: '',
      passwordTouched: false,
      passwordInputText: '',
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

  validatePassword = (text) => {
    if (this.state.passwordInputText.length === 0 ) {
      return 'this field is required';
    }
    if (this.state.passwordInputText.length < 6 || this.state.passwordInputText.length > 12) {
      return 'the length of password must have 6 - 12 characters';
    }
    return '';
  }

  render() {
    let emailErrorMessage = '';
    let passwordErrorMessage = '';

    if (this.state.emailTouched) {
      emailErrorMessage = this.validateEmail(this.state.emailInputText);
    }

    if (this.state.passwordTouched) {
      passwordErrorMessage = this.validatePassword(this.state.passwordInputText);
    }

    return (
      <View style={{
        flex: 1,
        backgroundColor: '#FAF8FF',
        alignItems: 'center',
        marginHorizontal: 10,
      }}>
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
          <Image
            source={require('./assets/Logo.png')}/>
        </View>
        <View style = {{
          marginBottom: 40,
          width: '100%',
        }}>
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
                color: '#363636'
              }}>
                Email
              </Text>
            </View>
            <View style={{
              height: 50,
              borderRadius: 5,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFFFFF',
              borderColor: '#7150B0',
              borderWidth: 1,
            }}>
              <TextInput
                style={{
                  fontSize: 20,
                  height: 40,
                  width: '100%',
                  paddingHorizontal: 10,
                  color: '#363636',
                }}
                keyboardType='email-address'
                textContentType='emailAddress'
                autoCapitalize={false}
                placeholder='Input email address'
                placeholderTextColor='#DBDBDB'
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
                color: '#D11C34',

              }}>
                {emailErrorMessage}
              </Text>
            </View>
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
                color: '#363636',
              }}>
                Password
              </Text>
            </View>
            <View style={{
              height: 50,
              borderRadius: 5,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFFFFF',
              borderColor: '#7150B0',
              borderWidth: 1,
            }}>
              <TextInput
                style={{
                  fontSize: 20,
                  height: 40,
                  width: '100%',
                  paddingHorizontal: 10,
                  color: '#363636',
                }}
                keyboardType='default'
                textContentType='password'
                autoCapitalize={false}
                placeholder='Input password'
                placeholderTextColor='#DBDBDB'
                onChangeText={(text) => this.setState({passwordInputText: text, passwordTouched: true})}
                secureTextEntry={true}
                value={this.state.passwordInputText}
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
                color: '#D11C34',

              }}>
                {passwordErrorMessage}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            borderRadius: 5,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#7150B0',
            marginBottom: 40,
          }}
          onPress={() => {
            this.setState({emailTouched: true, passwordTouched: true});
            if (this.validateEmail(this.state.emailInputText) === '' &&
              this.validatePassword(this.state.passwordInputText)) {
              alert('Signed In');
            }
          }}
        >
          <Text style={{fontSize: 25, color: '#FFFFFF'}}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

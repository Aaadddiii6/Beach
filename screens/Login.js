import {View, Text, TextInput, ImageBackground, Pressable,ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import {TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Button from '../components/Button';
import {Image} from 'react-native';

const Login = ({navigation}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setLoading(true);

    
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Home');
    }, 2000); 
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ImageBackground
        source={require('../assets/6530.jpg')}
        style={{flex: 1}}
        resizeMode="cover">
        <View style={{flex: 1, marginHorizontal: 22}}>
          <View style={{marginVertical: 22}}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                marginVertical: 12,
                color: COLORS.black,
              }}>
              Hey, Welcome Back!
            </Text>
            <Text style={{fontSize: 16, color: COLORS.black}}>
              Hello again, you have been missed.
            </Text>
          </View>

          <View style={{marginBottom: 12}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                marginVertical: 8,
              }}>
              Email address
            </Text>

            <View
              style={{
                width: '100%',
                height: 48,
                borderColor: COLORS.black,
                borderRadius: 8,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 22,
              }}>
              <TextInput
                placeholder="Enter your email address"
                placeholderTextColor={COLORS.black}
                keyboardType="email-address"
                style={{width: '100%'}}></TextInput>
            </View>
          </View>

          <View style={{marginBottom: 12}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                marginVertical: 8,
              }}>
              Password
            </Text>

            <View
              style={{
                width: '100%',
                height: 48,
                borderColor: COLORS.black,
                borderRadius: 8,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 22,
              }}>
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor={COLORS.black}
                secureTextEntry={isPasswordShown}
                style={{width: '100%'}}></TextInput>
              <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={{position: 'absolute', right: 12}}>
                {isPasswordShown == true ? (
                  <Ionicons name="eye-off" size={24} color={COLORS.black} />
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.black} />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 6,
            }}>
            <Checkbox
              style={{
                marginRight: 8,
              }}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? COLORS.beachpink : undefined}></Checkbox>

            <Text>Remember me</Text>
          </View>
          {loading && (
            <ActivityIndicator
              size={80}
              color={COLORS.primary}
              style={{marginTop: 16,
                position:"absolute",
                top:400,
                zIndex:99,
                right:150,
              }}
            />
          )}
          <Button
            title="Log in"
            textColor={COLORS.white}
            filled
            style={{marginTop: 18, marginBottom: 4}}
            onPress={handleLogin}></Button>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: COLORS.grey,
                marginHorizontal: 10,
              }}
            />
            <Text style={{fontSize: 14}}>Or Login with</Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: COLORS.grey,
                marginHorizontal: 10,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
               onPress={handleLogin}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                height: 52,
                borderWidth: 1,
                borderColor: COLORS.grey,
                marginRight: 4,
                borderRadius: 10,
              }}>
              <Image
                source={require('../assets/fb.png')}
                style={{
                  height: 36,
                  width: 36,
                  marginRight: 8,
                }}
                resizeMode="contain"
              />
              <Text>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                height: 52,
                borderWidth: 1,
                borderColor: COLORS.grey,
                marginRight: 4,
                borderRadius: 10,
              }}
              onPress={handleLogin}>
              <Image
                source={require('../assets/google.png')}
                style={{
                  height: 36,
                  width: 36,
                  marginRight: 8,
                }}
                resizeMode="contain"
              />
              <Text>Google</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 22,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.black,
              }}>
              Don't have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate('Signup')}>
              <Text
                style={{
                  color: COLORS.primary,
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 6,
                }}>
                SignUp
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;

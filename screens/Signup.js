import {View, Text, TextInput, ImageBackground, Pressable, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import {TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Button from '../components/Button';
import {Image} from 'react-native';


const Signup = ({navigation}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSignUp = () => {
    setLoading(true);

  
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Home');
    }, 2000); 
  };
  return (
    
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ImageBackground
        source={require('../assets/sea.jpg')}
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
              Create Account
            </Text>
            <Text style={{fontSize: 16, color: COLORS.black}}>
              Look into the safety of your nearby Beaches.
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
              Mobile number{' '}
            </Text>

            <View
              style={{
                width: '100%',
                height: 48,
                borderColor: COLORS.black,
                borderRadius: 8,
                borderWidth: 1,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 22,
              }}>
              <TextInput
                placeholder="+91"
                placeholderTextColor={COLORS.black}
                keyboardType="numeric"
                style={{
                  width: '12%',
                  borderRightWidth: 1,
                  borderLeftColor: COLORS.grey,
                  height: '100%',
                }}></TextInput>
              <TextInput
                placeholder="Enter your phone number"
                placeholderTextColor={COLORS.black}
                keyboardType="numeric"
                style={{width: '88%'}}></TextInput>
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

            <Text>I agree to the terms and condition</Text>
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
            title="Sign Up"
            textColor={COLORS.white}
            filled
            style={{marginTop: 18, marginBottom: 4}}
            onPress={handleSignUp}
            ></Button>
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
            <Text style={{fontSize: 14}}>Or Sign up with</Text>
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
               onPress={handleSignUp}
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
               onPress={handleSignUp}
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
              Already have an account?
            </Text>
            <Pressable  onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: COLORS.primary,
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 6
                }}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Signup;

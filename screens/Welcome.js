import {View, Text, Image, TouchableOpacity,StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import COLORS from '../constants/colors';


const Welcome = ({navigation}) => {
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={[COLORS.beachpink, COLORS.beachorange]}>
      <View style={{flex: 1}}>
        <Image
          source={require('../assets/beach.png')}
          style={{width: 350, zIndex: 99, height: 350, top: 200, right: -40}}
        />
        <Image
          source={require('../assets/cocogreen.png')}
          style={{
            position: 'absolute',
            width: 70,
            height: 115,
            top: 520,
            right: 60,

            transform: [{translateX: 20}, {translateY: 10}, {rotate: '-20deg'}],
          }}
        />
        <Image
          source={require('../assets/clouds.png')}
          style={{
            position: 'absolute',

            width: 400,
            height: 360,
            top: 0,
            right: 10,

            transform: [{translateX: 10}, {translateY: 10}],
          }}
        />
        <View
          style={{
            paddingHorizontal: 22,
            position: 'absolute',
            top: 540,
            width: '100%',
          }}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 800,
              color: COLORS.white,
            }}>
            Let's Get
          </Text>
          <Text style={{fontSize: 40, fontWeight: 800, color: COLORS.white}}>
            Started
          </Text>
          <Text style={{fontWeight: 600, fontSize: 20, color: COLORS.white}}>
            Your safety is at the tip of your finger
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Join Now</Text>
          </TouchableOpacity>
          <View style={{
            flexDirection:"row",
            marginTop:12,
            justifyContent:"center"
          }}><Text style={{fontSize:16,
            color:COLORS.white

          }}>Already have an account? </Text>
          <Pressable onPress={()=>navigation.navigate("Login")}>
<Text style={{
  fontSize:16,
  color:COLORS.white,
  fontWeight:"bold"
}}>Log in</Text>
          </Pressable>

          </View>
        </View>
      </View>
    </LinearGradient>
  );
};



const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 60, 
    backgroundColor: COLORS.white, 
    borderRadius: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  buttonText: {
    color: '#808080', 
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Welcome;
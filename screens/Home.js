import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import {TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import Button from '../components/Button';

import {StatusBar} from 'expo-status-bar';

import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';

export default function Home() {
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={4}
        source={require('../assets/gta.jpg')}
        className="absolute"
        style={{top: -400}}
      />
      <SafeAreaView className="flex flex-1">
        <View
          style={{
            height: '7%',
          }}
          className="mx-4 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{backgroundColor: COLORS.bgWhite1}}>
            <TextInput
              placeholder="Search City"
              placeholderTextColor={'lightgray'}
              className="rounded-full p-3 m-1"></TextInput>
            <TouchableOpacity
              style={{backgroundColor: COLORS.bgWhite1}}
              className="rounded-full p-3 m-1">
              <MagnifyingGlassIcon color="white" size="25" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

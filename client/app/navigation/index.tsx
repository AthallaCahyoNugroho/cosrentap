import React, { useState } from 'react';
import { 
  View,
  StyleSheet, 
  Alert, 
  SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginPage from '../(auth)/(login)';
import UserScreen from '../(tabs)/(user)';
import VendorScreen from '../(tabs)/(vendor)';

const LoginScreen = () => {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name='login' component={LoginPage}/>
        <Stack.Screen name='dashboardUser' component={UserScreen}/>
        <Stack.Screen name='dashboardVendor' component={VendorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f4f7',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#6200ee',
    marginTop: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  registerButton: {
    marginTop: 20,
  },
  registerText: {
    textAlign: 'center',
    color: '#000',
  },
});

export default LoginScreen;

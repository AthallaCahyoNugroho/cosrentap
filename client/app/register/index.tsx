    import { SafeAreaView,View,TextInput,Text } from "react-native";

  import React, { useState } from 'react';
  
  import { Link } from "expo-router";
  
  export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
  
    return (
      <SafeAreaView>
        <View>
          <Text>Sign Up</Text>
          <Text>VERIFY THROUGH EMAIL</Text>
          <TextInput 
            placeholder="yourmail@shrestha.com"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput 
            placeholder="OTP"
            onChangeText={text => setOtp(text)}
            value={otp}
            keyboardType="numeric"
          />
          <Link href={`/verify`}><Text>Verify</Text></Link>
          <Link href={`/login`}><Text>Back To Login</Text></Link>
        </View>
      </SafeAreaView>
    );
  }

  const styles = {
    container: {
      flex: 1,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subTitle: {
      fontSize: 16,
      marginBottom: 20,
    },
    textInput: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: 10,
      textAlign: 'center',
      borderRadius: 5,
      marginBottom: 10,
    },
    link: {
      color: '#007bff',
      textAlign: 'center',
    },
};
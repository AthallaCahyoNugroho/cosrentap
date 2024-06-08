import { 
    SafeAreaView, 
    Text, 
    StyleSheet,
    TextInput,
    View,
    Alert,
    Button
} from "react-native";
import { Link, router } from "expo-router";

import React, { useState } from 'react';
import { users } from '../../../dataDummy/dummy';
import UserScreen from "@/app/(tabs)/(user)";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const user = users.find(u => u.email === email && u.password === password && u.role === 'user');
        const vendor = users.find(u => u.email === email && u.password === password && u.role === 'vendor');
        const admin = users.find(u => u.email === email && u.password === password && u.role === 'adminr');
        if (user) {
          router.navigate('(tabs)/(user)');
        } 
				else if (vendor){
					router.navigate('(tabs)/(vendor)');
				}
				else if (admin){
					router.navigate('(tabs)/(vendor)');
				}
				else {
            Alert.alert('Invalid credentials', 'Please check your email and password');
        }
    };
    
    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.textTitleLight}>Cosrentap</Text>
        <Text style={styles.textTitleBold}>Sign in</Text>
        <View style={styles.containerInputLabel}>
            <Text style={styles.textLabel}>YOUR EMAIL</Text>
            <TextInput 
                style={styles.textInput}
                onChangeText={setEmail}
                keyboardType="email-address"
                placeholder="youremail@example.com"
                value={email}
                autoCapitalize="none"
            />
        </View>
        <View style={styles.containerInputLabel}>
            <Text style={styles.textLabel}>PASSWORD</Text>
            <TextInput 
                style={styles.textInput}
                placeholder="********"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
        </View>
        
        <View style={styles.blueButton}>
            <Button 
                title="Login"
                onPress={handleLogin}
                color={'#315EE7'}
            />
        </View>

        <Text style={styles.textOffer}>Don't have an account?</Text>
        <Link 
            style={styles.blackButton} 
            href={`(tabs)`}
        >Create Account</Link>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    textTitleLight: {
        color: '#22215B',
        fontSize: 36,
        marginBottom: -24
    },
    textTitleBold: {
        color: '#22215B',
        fontSize: 72,
        fontWeight: '900',
        marginBottom: 24,
    },
    containerInputLabel:{
        marginBottom: 32
    },
    textLabel:{
        color: '#888888',
        fontSize: 14,
        letterSpacing: 4,
        marginBottom:4
    },
    textInput: {
        backgroundColor: '#F2F3F3',
        paddingHorizontal:16,
        paddingVertical: 8,
        borderRadius: 4
    },
    blueButton: {
        paddingVertical: 16,
        fontSize:16,
        marginTop: 6,
        marginBottom: 64
    }, 
    textOffer: {
        textAlign: 'center',
        marginBottom: 8
    },
    blackButton: {
        backgroundColor: '#0E151C',
        color: 'white',
        textAlign: 'center',
        paddingVertical: 16,
        fontSize:16,
        fontWeight: '700',
        borderRadius: 8
    }
})


import { SafeAreaView, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function LoginPage(){
    LoginPage
    return (
    <SafeAreaView style={styles.container}>
        <Text>Test</Text>
        <Link href={`(tabs)`}> Dashboard</Link>
        <Link href={`register`}> Register</Link>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16
    }
})


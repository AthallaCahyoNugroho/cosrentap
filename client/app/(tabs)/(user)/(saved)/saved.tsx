import { Text, SafeAreaView, StyleSheet } from "react-native"

export default function SavedPage(){
    return (
    <SafeAreaView style={styles.container}>
        <Text>Test</Text>
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
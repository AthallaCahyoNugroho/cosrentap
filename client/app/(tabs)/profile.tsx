import { 
    Text, 
    SafeAreaView, 
    StyleSheet,
    View
} from "react-native"

export default function ProfilePage(){
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerProfile}>
            <View style={styles.profile}>

            </View>
            <Text>
                Kelompok 9 Penyewa
            </Text>
            <Text>
                kelompok9@penyewa.com
            </Text>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 40,
        paddingLeft: 16,
        paddingRight: 16,
        flex: 1
    },
    containerProfile: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile:{
        borderRadius: 9999,
        width:160,
        height: 160,
        backgroundColor: '#DDD'
    }
})
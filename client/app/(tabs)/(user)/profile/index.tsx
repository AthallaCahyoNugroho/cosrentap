import { Link } from "expo-router"
import { 
    Text, 
    SafeAreaView, 
    StyleSheet,
    View,
    Button
} from "react-native"

export default function ProfilePage(){
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerProfile}>
            <View style={styles.profile}>

            </View>
            <Text style={styles.titleName}>
                Athalla Cahyo Nugroho
            </Text>
            <Text style={styles.titleEmail}>
                athallacn@gmail.com
            </Text>
        </View>

        <View>
            <Link href={``}>
                <Text>Personal Details</Text>
            </Link>
            <Link href={``}>
                <Text>Settings</Text>
            </Link>
            <Link href={``}>
                <Text>Payment Details</Text>
            </Link>
            <Link href={``}>
                <Text>FAQ</Text>
            </Link>
            <Link href={``}>
                <Text>Switch Account</Text>
            </Link>
            <Button title={`Log Out`}/>
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
        backgroundColor: '#DDD',
        marginBottom: 20
    },
    titleName:{
        color: '#1A1E25',
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 12
    },
    titleEmail:{
        color: "#7D7F88",
        fontSize: 16
    }
})
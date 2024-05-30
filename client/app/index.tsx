import { 
    Text, 
    View,
    SafeAreaView,
    StyleSheet
} from "react-native";
import { Link } from "expo-router";

export default function GetStarted(){
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.textWelcome}>Welcome to</Text>
                <Text style={styles.textTitle}>COSRENTAP</Text>
                <Text style={styles.textSubTitle}>Find the tenant, list your property in just a simple steps, in your hand.</Text>
                <Text style={styles.textSubTitle}>You are one step away.</Text>
                <Link style={styles.blackButton} href={`/login`}><Text>Get Started</Text></Link>
                <Text style={styles.textSmall}>Kelompok 9 RPL</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        paddingHorizontal: 16,
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    textWelcome: {
        color: '#22215B',
        fontSize: 24,
        fontStyle: 'italic',
        marginBottom: -16,
    },
    textTitle: {
        color: '#22215B',
        fontWeight: '900',
        fontSize: 48,
    },
    textSubTitle: {
        color: '#7B7F9E',
        fontSize: 14,
        marginBottom: 24,
    },
    blackButton: {
        backgroundColor: '#0E151C',
        color: 'white',
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 12,
        marginBottom: 64,
        marginTop: 36,
        borderRadius: 8
    },
    textSmall: {
        fontSize: 12,
        textAlign: 'center',
    }
})
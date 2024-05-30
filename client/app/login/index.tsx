import { 
    SafeAreaView, 
    Text, 
    StyleSheet,
    TextInput,
    View 
} from "react-native";
import { Link } from "expo-router";

export default function LoginPage(){
    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.textTitleLight}>Cosrentap</Text>
        <Text style={styles.textTitleBold}>Sign in</Text>
        <View style={styles.containerInputLabel}>
            <Text style={styles.textLabel}>YOUR EMAIL</Text>
            <TextInput 
                style={styles.textInput}
                placeholder="youremail@example.com"
                keyboardType="ascii-capable"
            />
        </View>
        <View style={styles.containerInputLabel}>
            <Text style={styles.textLabel}>PASSWORD</Text>
            <TextInput 
                style={styles.textInput}
                placeholder="********"
                keyboardType="ascii-capable"
            />
        </View>
        <Link 
            style={styles.blueButton} 
            href={`(tabs)`}
        >Login</Link>
        <Text style={styles.textOffer}>Don't have an account?</Text>
        <Link style={styles.blackButton} 
            href={`register`}
        >Create an Account</Link>
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
        backgroundColor: '#315EE7',
        color: 'white',
        textAlign: 'center',
        paddingVertical: 16,
        fontSize:16,
        fontWeight: '700',
        borderRadius: 8,
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


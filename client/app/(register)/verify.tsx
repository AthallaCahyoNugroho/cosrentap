import { 
    SafeAreaView,
    View,
    TextInput,
    Text
} from "react-native";

import { Link } from "expo-router";

export default function RegisterPage(){
    return(
        <SafeAreaView>
            <View>
            <Text>Sign Up</Text>
            <Text>VERIFY THROUGH EMAIL</Text>
            <TextInput 
            placeholder="yourmail@shrestha.com"/>
            <Link href={`/verify`}><Text>Verify</Text></Link>
            <Link href={`/login`}><Text>Back To Login</Text></Link>



            </View>
        </SafeAreaView>
    )
}
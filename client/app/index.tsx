import { Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GetStarted(){
    return(
        <SafeAreaView>
            <View>
                <Text>This is Get Started Page</Text>
                <Link href={`/login`}><Text>Let's to go Login Page</Text></Link>
            </View>
        </SafeAreaView>
    )
}
import { 
    View,
    SafeAreaView,
    Text,
} from "react-native";

import { Link } from "expo-router";

export default function HomePage(){
    return(
        <SafeAreaView>
            <View>
                <Text>
                    Welcome to
                </Text>
                <Text>
                    Cosrentap
                </Text>
                <Text>
                    This application used for prople who looking for rent costume from best vendors
                </Text>
                
                <Link 
                href={`(user)`}
                >I'm Ready</Link>
            </View>
        </SafeAreaView>
    )
}
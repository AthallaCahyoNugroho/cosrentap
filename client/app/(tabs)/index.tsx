

import { 
    View,
    Text,
} from "react-native";

import { Link } from "expo-router";

export default function HomePage(){
    return(
        <View>
            <Text>
                Welcome
            </Text>
            <Link 
            href={`(user)`}
            >I'm Ready</Link>
        </View>
    )
}
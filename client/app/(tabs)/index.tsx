import { 
  Text, 
  StyleSheet, 
  TextInput, 
  SafeAreaView,
  View,
  Image,
  ScrollView 
} from 'react-native';
import { SearchBar } from 'react-native-screens';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.locationDesc}>
          <Text style={styles.smallText}>Your current locations</Text>
          <Text style={styles.locationText}>Bouddha, Kathmandu</Text>
        </View>
        <View style={styles.searchBarStyle}>
          <TextInput
            placeholder="useless placeholder"
            keyboardType="ascii-capable"
            placeholderTextColor={'#7D7F88'}
          />
        </View>

        <Text style={styles.grettingsStyle}>Welcome to Cosrentap</Text>
        
        <View>
          <Text style={styles.labelCard}>Lokasi Terdekat</Text>
          <ScrollView
            horizontal={true}
            style={styles.card1container}
          >
            <View style={styles.card1}>
              <Text>Yo</Text>
            </View>
            <View style={styles.card1}>
            <Text>Yo</Text>
            </View>
          </ScrollView>
        </View>

        <View>
          <Text style={styles.labelCard}>Top Rated</Text>
          <ScrollView
            horizontal={true}
          >
            <View style={styles.card1}>

            </View>
          </ScrollView>
        </View>

        <View>
          <Text style={styles.labelCard}>Terbaru</Text>
          <View style={styles.card2container}>
            <View style={styles.card2}>

            </View>
            <View style={styles.card2}>

            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 40,
    paddingLeft: 16,
    paddingRight: 16,
    display:'flex',
    flex: 1
  },
  smallText:{
    color: '#7D7F88',
    fontSize: 14,
    paddingBottom: 6,
  },
  locationDesc: {
    marginBottom: 20,
  },
  locationText:{
    color: '#1A1E25',
    fontSize:20,
    fontWeight: '900'
  },
  searchBarStyle:{
    backgroundColor: '#E3E2E5',
    paddingHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 10,
    width: 'auto',
    marginBottom: 36,
  },
  grettingsStyle:{
    color: '#1A1E25',
    fontSize: 24,
    fontWeight: '700'
  },
  labelCard:{
    color: '#1A1E25',
    fontSize: 18,
    marginBottom:20,
    fontWeight: '700'
  },
  card1: {
    width: 316,
    height: 189,
    padding: 8,
    backgroundColor: '#E3E2E5',
    borderRadius: 8,
  },
  card1container:{
    display: 'flex',
    flexDirection: 'row',
    flex:1,
    rowGap: 10,
  },
  card2: {
    flex: 1/2,
    height: 227,
    backgroundColor: '#E3E2E5',
    borderRadius: 8,
  },
  card2container:{
    flexDirection: 'row',
    flex: 2,
    gap: 8
  },
});

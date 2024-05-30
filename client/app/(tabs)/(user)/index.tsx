import {
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  View,
  Image,
  ScrollView,
} from "react-native";

import { vendorStore } from "@/dataDummy/dummy";

export default function UserScreen() {
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
            placeholderTextColor={"#7D7F88"}
          />
        </View>
        <View style={styles.labelCardList}>
          <Text style={styles.labelCard}>Lokasi Terdekat</Text>
          <ScrollView horizontal={true}>
            {vendorStore.map((item) => {
              return (
                <View style={styles.card1}>
                  <View>
                    <Image
                      style={styles.imageContent}
                      source={require(`@/assets/images/gambar-1.png`)}
                    />
                  </View>
                  <View
                    style={{
                      padding: 8,
                      width: "auto",
                    }}
                  >
                    <Text>{item.rating}</Text>
                    <Text>{item.name}</Text>
                    <Text>{item.desc}</Text>
                    <Text>{item.location}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.labelCardList}>
          <Text style={styles.labelCard}>Top Rated</Text>
          <ScrollView horizontal={true}>
            {vendorStore.map((item) => {
              return (
                <View style={styles.card1}>
                  <View>
                    <Image
                      style={styles.imageContent}
                      source={require(`@/assets/images/gambar-2.png`)}
                    />
                  </View>
                  <View
                    style={{
                      padding: 8,
                      width: "auto",
                    }}
                  >
                    <Text>{item.rating}</Text>
                    <Text>{item.name}</Text>
                    <Text>{item.desc}</Text>
                    <Text>{item.location}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.labelCardList}>
          <Text style={styles.labelCard}>Terbaru</Text>
          <ScrollView horizontal={true}>
            {vendorStore.map((item) => {
              return (
                <View style={styles.card1}>
                  <View>
                    <Image
                      style={styles.imageContent}
                      source={require(`@/assets/images/gambar-3.png`)}
                    />
                  </View>
                  <View
                    style={{
                      padding: 8,
                      width: "auto",
                    }}
                  >
                    <Text>{item.rating}</Text>
                    <Text>{item.name}</Text>
                    <Text>{item.desc}</Text>
                    <Text>{item.location}</Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 16,
    paddingRight: 16,
    display: "flex",
    flex: 1,
  },
  smallText: {
    color: "#7D7F88",
    fontSize: 14,
    paddingBottom: 6,
  },
  locationDesc: {
    marginBottom: 20,
  },
  locationText: {
    color: "#1A1E25",
    fontSize: 20,
    fontWeight: "900",
  },
  searchBarStyle: {
    backgroundColor: "#E3E2E5",
    paddingHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 10,
    width: "auto",
    marginBottom: 36,
  },
  grettingsStyle: {
    color: "#1A1E25",
    fontSize: 24,
    fontWeight: "700",
  },
  labelCard: {
    color: "#1A1E25",
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "700",
  },
  card1: {
    display: "flex",
    flexDirection: "row",
    width: 316,
    height: 189,
    backgroundColor: "#E3E2E5",
    borderRadius: 8,
    marginHorizontal: 8,
  },
  labelCardList: {
    marginBottom: 24,
  },
  imageContent: {
    width: 108,
    height: 189,
  },
});

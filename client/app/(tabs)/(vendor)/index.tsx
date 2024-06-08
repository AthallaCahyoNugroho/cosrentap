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

export default function VendorScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Vendor screen</Text>
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

import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import TimeContainer from "../components/TimeContainer";
import ChatSection4 from "../components/ChatSection4";
import ChatSection3 from "../components/ChatSection3";
import ChatSection2 from "../components/ChatSection2";
import ChatSection1 from "../components/ChatSection1";
import ChatSection from "../components/ChatSection";
import BotNav1 from "../components/BotNav1";
import { FontSize, Border, Color, FontFamily } from "../GlobalStyles";

const Chat = ({ onClose }) => {
  return (
    <View style={styles.chat}>
      <TimeContainer />
      <View style={[styles.searchBar, styles.searchLayout]}>
        <View style={[styles.searchBarChild, styles.searchLayout]} />
        <View style={styles.vuesaxoutlinesearchNormalParent}>
          <Image
            style={styles.vuesaxoutlinesearchNormalIcon}
            contentFit="cover"
            source={require("../assets/vuesaxoutlinesearchnormal.png")}
          />
          <Text style={[styles.searchMessages, styles.backTypo]}>
            Search messages
          </Text>
        </View>
      </View>
      <ChatSection4 />
      <ChatSection3 />
      <ChatSection2 />
      <ChatSection1 />
      <ChatSection />
      <Text style={[styles.back, styles.backTypo]}>Back</Text>
      <BotNav1
        vuesaxoutlinesignpost={require("../assets/vuesaxoutlinesignpost.png")}
        explore="Explore"
        vuesaxlinearheart={require("../assets/vuesaxlinearheart1.png")}
        saved="Saved"
        vuesaxboldmessageText={require("../assets/vuesaxboldmessagetext.png")}
        chat="Chat"
        vuesaxlinearprofile={require("../assets/vuesaxlinearprofile.png")}
        profile="Profile"
        vuesaxlinearhome={require("../assets/vuesaxlinearhome.png")}
        home="Home"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    height: 48,
    width: 343,
    position: "absolute",
  },
  backTypo: {
    textAlign: "left",
    fontSize: FontSize.paragraphP1Medium_size,
  },
  searchBarChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_53xl,
    backgroundColor: Color.colorWhitesmoke_500,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 0.8,
  },
  vuesaxoutlinesearchNormalIcon: {
    width: 22,
    height: 22,
  },
  searchMessages: {
    letterSpacing: 0.3,
    lineHeight: 21,
    fontFamily: FontFamily.hindRegular,
    color: Color.navGray,
    marginLeft: 14,
  },
  vuesaxoutlinesearchNormalParent: {
    top: 13,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  searchBar: {
    top: 60,
    left: 16,
  },
  back: {
    top: 675,
    left: 173,
    letterSpacing: 0.2,
    lineHeight: 16,
    fontWeight: "300",
    fontFamily: FontFamily.hindLight,
    color: Color.colorBlack,
    position: "absolute",
  },
  chat: {
    backgroundColor: Color.foundationWhiteLightHover,
    width: 375,
    height: 846,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Chat;

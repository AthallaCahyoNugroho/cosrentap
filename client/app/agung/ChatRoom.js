import React, { useState, useCallback } from "react";
import { View, StyleSheet, Pressable, Text, Modal } from "react-native";
import { Image } from "expo-image";
import TimeContainer from "../components/TimeContainer";
import Chat from "./Chat";
import ChatBubble from "../components/ChatBubble";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ChatRoom = ({ onClose }) => {
  const [
    vuesaxoutlinearrowLeftIconVisible,
    setVuesaxoutlinearrowLeftIconVisible,
  ] = useState(false);

  const openVuesaxoutlinearrowLeftIcon = useCallback(() => {
    setVuesaxoutlinearrowLeftIconVisible(true);
  }, []);

  const closeVuesaxoutlinearrowLeftIcon = useCallback(() => {
    setVuesaxoutlinearrowLeftIconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.chatRoom}>
        <TimeContainer />
        <View style={[styles.topSection, styles.frameParentFlexBox]}>
          <View style={styles.frameParentFlexBox}>
            <Pressable
              style={styles.vuesaxoutlinearrowLeft}
              onPress={openVuesaxoutlinearrowLeftIcon}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/vuesaxoutlinearrowleft.png")}
              />
            </Pressable>
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={styles.frameParentFlexBox}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/frame-77.png")}
                />
              </View>
              <View style={[styles.frameContainer, styles.frameParentFlexBox]}>
                <View style={styles.bhubanKcWrapper}>
                  <Text style={styles.bhubanKc}>Bhuban KC</Text>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.vuesaxoutlinemenuIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxoutlinemenu.png")}
          />
        </View>
        <View style={[styles.homeIndicator, styles.typeSectionPosition]}>
          <View style={styles.homeIndicator1} />
        </View>
        <View style={[styles.typeSection, styles.typeSectionPosition]}>
          <View
            style={[
              styles.vuesaxlinearaddCircleParent,
              styles.frameParentFlexBox,
            ]}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/vuesaxlinearaddcircle.png")}
            />
            <View style={styles.searchBar}>
              <View
                style={[
                  styles.vuesaxlinearmessageTextParent,
                  styles.frameParentFlexBox,
                ]}
              >
                <Image
                  style={styles.vuesaxlinearmessageTextIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxlinearmessagetext1.png")}
                />
                <Text style={[styles.typeSomething, styles.textTypo]}>
                  Type something
                </Text>
              </View>
            </View>
          </View>
        </View>
        <ChatBubble
          prop="14:22"
          howIsTheCostumeSize="How is the Costume Size?"
        />
        <ChatBubble
          prop="14:28"
          howIsTheCostumeSize="I see, thanks for informing!"
          propTop={371}
          propShadowOffset="unset"
        />
        <View style={[styles.chatBubble, styles.chatFlexBox]}>
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/2.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>14:24</Text>
        </View>
        <View style={[styles.chatBubble1, styles.chatFlexBox]}>
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/4.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>14:30</Text>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={vuesaxoutlinearrowLeftIconVisible}
      >
        <View style={styles.vuesaxoutlinearrowLeftIconOverlay}>
          <Pressable
            style={styles.vuesaxoutlinearrowLeftIconBg}
            onPress={closeVuesaxoutlinearrowLeftIcon}
          />
          <Chat onClose={closeVuesaxoutlinearrowLeftIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  frameParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  typeSectionPosition: {
    left: 0,
    position: "absolute",
    width: 375,
  },
  textTypo: {
    color: Color.navGray,
    fontFamily: FontFamily.hindRegular,
    letterSpacing: 0.3,
    textAlign: "left",
  },
  chatFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  vuesaxoutlinearrowLeftIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  vuesaxoutlinearrowLeftIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  vuesaxoutlinearrowLeft: {
    width: 20,
    height: 20,
  },
  frameChild: {
    borderRadius: 41,
    width: 42,
    height: 42,
    overflow: "hidden",
  },
  bhubanKc: {
    letterSpacing: 0.2,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.hindBold,
    color: Color.foundationBlueDark,
    textAlign: "left",
    fontSize: FontSize.paragraphP1Medium_size,
  },
  bhubanKcWrapper: {
    justifyContent: "center",
  },
  frameContainer: {
    marginLeft: 12,
  },
  frameParent: {
    marginLeft: 16,
  },
  vuesaxoutlinemenuIcon: {
    marginLeft: 113,
  },
  topSection: {
    top: 60,
    left: 16,
    flexDirection: "row",
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.foundationGreyNormal,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    bottom: 0,
    height: 28,
    backgroundColor: Color.foundationWhiteLightHover,
    left: 0,
  },
  vuesaxlinearmessageTextIcon: {
    width: 22,
    height: 22,
  },
  typeSomething: {
    lineHeight: 21,
    width: 258,
    marginLeft: 14,
    fontSize: FontSize.paragraphP1Medium_size,
    fontFamily: FontFamily.hindRegular,
    letterSpacing: 0.3,
  },
  vuesaxlinearmessageTextParent: {
    top: 13,
    left: 20,
    width: 303,
    position: "absolute",
  },
  searchBar: {
    borderRadius: 208,
    backgroundColor: Color.colorWhitesmoke_500,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 0.8,
    width: 297,
    height: 48,
    marginLeft: 19,
  },
  vuesaxlinearaddCircleParent: {
    top: 16,
    left: 19,
    position: "absolute",
  },
  typeSection: {
    top: 738,
    height: 80,
    overflow: "hidden",
  },
  icon1: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    width: 219,
    height: 66,
  },
  text: {
    fontSize: FontSize.size_smi,
    lineHeight: 13,
    marginLeft: 8,
  },
  chatBubble: {
    top: 252,
  },
  chatBubble1: {
    top: 448,
  },
  chatRoom: {
    height: 846,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: 375,
    backgroundColor: Color.foundationWhiteLightHover,
  },
});

export default ChatRoom;

import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PayWithFormContainer from "../components/PayWithFormContainer";
import PropCard from "../components/PropCard";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Checkout = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.checkout}>
      <View style={[styles.statusBarIphoneXOrNewe, styles.homeIndicatorLayout]}>
        <View style={styles.rightSide}>
          <Image
            style={[styles.batteryIcon, styles.batteryIconPosition]}
            contentFit="cover"
            source={require("../assets/battery2.png")}
          />
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi2.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            contentFit="cover"
            source={require("../assets/mobile-signal.png")}
          />
          <Image
            style={styles.recordingIndicatorIcon}
            contentFit="cover"
            source={require("../assets/recording-indicator.png")}
          />
        </View>
        <Image
          style={styles.leftSideIcon}
          contentFit="cover"
          source={require("../assets/left-side2.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.homePosition]}>
        <View style={[styles.homeIndicator1, styles.homePosition]} />
      </View>
      <View style={[styles.topSection, styles.topSectionFlexBox]}>
        <View style={styles.topSectionFlexBox}>
          <Image
            style={styles.vuesaxoutlinearrowLeftIcon}
            contentFit="cover"
            source={require("../assets/vuesaxoutlinearrowleft1.png")}
          />
          <Text style={[styles.advancePayment, styles.totalPriceClr]}>
            Advance Payment
          </Text>
        </View>
        <Image
          style={styles.vuesaxboldmessageQuestionIcon}
          contentFit="cover"
          source={require("../assets/vuesaxboldmessagequestion.png")}
        />
      </View>
      <PayWithFormContainer />
      <View style={[styles.priceDetails, styles.topSectionPosition]}>
        <View style={styles.frameFlexBox}>
          <View style={[styles.frameGroup, styles.frameFlexBox]}>
            <View
              style={[styles.priceDetailsWrapper, styles.topSectionFlexBox]}
            >
              <Text style={[styles.priceDetails1, styles.priceDetails1Typo]}>
                Price details
              </Text>
            </View>
            <Text style={styles.moreInfo}>More info</Text>
          </View>
          <View style={styles.frameWrapper}>
            <View style={styles.totalPriceParent}>
              <Text style={[styles.totalPrice, styles.textTypo]}>
                Total price
              </Text>
              <Text style={[styles.text, styles.textTypo]}>$500</Text>
            </View>
          </View>
        </View>
      </View>
      <PropCard />
      <Pressable
        style={[styles.bookingCta, styles.bookingLayout]}
        onPress={() => navigation.navigate("Profile")}
      >
        <LinearGradient
          style={[styles.bookingCtaChild, styles.bookingLayout]}
          locations={[0, 1]}
          colors={["#917afd", "#6246ea"]}
        />
        <Text style={styles.payInAdvance}>Pay in Advance</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicatorLayout: {
    width: 375,
    left: 0,
  },
  batteryIconPosition: {
    top: 0,
    position: "absolute",
  },
  homePosition: {
    bottom: 8,
    position: "absolute",
  },
  topSectionFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  totalPriceClr: {
    color: Color.foundationBlueDark,
    textAlign: "left",
  },
  topSectionPosition: {
    width: 343,
    left: 16,
    position: "absolute",
  },
  frameFlexBox: {
    justifyContent: "center",
    width: 295,
  },
  priceDetails1Typo: {
    fontFamily: FontFamily.hindBold,
    fontWeight: "700",
    lineHeight: 26,
    letterSpacing: 0.4,
    fontSize: FontSize.size_xl,
  },
  textTypo: {
    lineHeight: 21,
    fontSize: FontSize.paragraphP1Medium_size,
    letterSpacing: 0.3,
    fontFamily: FontFamily.hindBold,
    fontWeight: "700",
  },
  bookingLayout: {
    height: 48,
    width: 343,
    position: "absolute",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
    display: "none",
    position: "absolute",
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 12,
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  statusBarIphoneXOrNewe: {
    height: 44,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.foundationGreyNormal,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    height: 28,
    width: 375,
    left: 0,
    backgroundColor: Color.foundationWhiteLightHover,
  },
  vuesaxoutlinearrowLeftIcon: {
    width: 20,
    height: 20,
  },
  advancePayment: {
    marginLeft: 16,
    textAlign: "left",
    fontFamily: FontFamily.hindBold,
    fontWeight: "700",
    lineHeight: 26,
    letterSpacing: 0.4,
    fontSize: FontSize.size_xl,
  },
  vuesaxboldmessageQuestionIcon: {
    height: 24,
    marginLeft: 161,
    width: 24,
  },
  topSection: {
    top: 60,
    width: 343,
    left: 16,
    position: "absolute",
  },
  priceDetails1: {
    color: Color.colorBlack,
    width: 299,
    textAlign: "left",
  },
  priceDetailsWrapper: {
    width: 236,
  },
  moreInfo: {
    fontSize: FontSize.mainCaptionRegular_size,
    lineHeight: 14,
    fontWeight: "500",
    fontFamily: FontFamily.hindMedium,
    textAlign: "right",
    letterSpacing: 0.3,
  },
  frameGroup: {
    alignItems: "center",
    flexDirection: "row",
  },
  totalPrice: {
    textAlign: "left",
    color: Color.foundationBlueDark,
  },
  text: {
    marginLeft: 159,
    textAlign: "right",
  },
  totalPriceParent: {
    flexDirection: "row",
  },
  frameWrapper: {
    marginTop: 20,
  },
  priceDetails: {
    top: 310,
    shadowColor: "rgba(67, 67, 67, 0.15)",
    shadowOffset: {
      width: 0,
      height: 24,
    },
    shadowRadius: 96,
    elevation: 96,
    shadowOpacity: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.foundationWhiteLight,
    padding: Padding.p_5xl,
  },
  bookingCtaChild: {
    borderRadius: Border.br_35xl,
    backgroundColor: "transparent",
    height: 48,
    left: 0,
    top: 0,
  },
  payInAdvance: {
    top: 11,
    left: 122,
    color: Color.foundationWhiteLight,
    fontSize: FontSize.paragraphP1Medium_size,
    textAlign: "left",
    fontFamily: FontFamily.hindBold,
    fontWeight: "700",
    position: "absolute",
  },
  bookingCta: {
    top: 742,
    left: 16,
    height: 48,
  },
  checkout: {
    flex: 1,
    width: "100%",
    height: 820,
    overflow: "hidden",
    backgroundColor: Color.foundationWhiteLightHover,
  },
});

export default Checkout;

import React, { useState, useCallback } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import Home from "./Home";
import { useNavigation } from "@react-navigation/native";
import BotNav from "../components/BotNav";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const PropertyDetails = () => {
  const [groupIconVisible, setGroupIconVisible] = useState(false);
  const navigation = useNavigation();

  const openGroupIcon = useCallback(() => {
    setGroupIconVisible(true);
  }, []);

  const closeGroupIcon = useCallback(() => {
    setGroupIconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.propertyDetails}>
        <LinearGradient
          style={[styles.picturebuttons, styles.picturebuttonsPosition]}
          locations={[0, 0.5]}
          colors={["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0)"]}
        >
          <ImageBackground
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/picturebuttons.png")}
          >
            <View style={styles.wrapper}>
              <Text style={[styles.text, styles.textTypo]}>1 / 11</Text>
            </View>
          </ImageBackground>
        </LinearGradient>
        <View
          style={[styles.statusBarIphoneXOrNewe, styles.picturebuttonsPosition]}
        >
          <View style={styles.rightSide}>
            <Image
              style={styles.batteryIcon}
              contentFit="cover"
              source={require("../assets/battery3.png")}
            />
            <Image
              style={styles.wifiIcon}
              contentFit="cover"
              source={require("../assets/wifi3.png")}
            />
            <Image
              style={styles.mobileSignalIcon}
              contentFit="cover"
              source={require("../assets/mobile-signal1.png")}
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
            source={require("../assets/left-side1.png")}
          />
        </View>
        <View style={styles.button}>
          <Pressable style={styles.containerLayout} onPress={openGroupIcon}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/group-7.png")}
            />
          </Pressable>
          <View style={styles.buttonInner}>
            <Image
              style={styles.containerLayout}
              contentFit="cover"
              source={require("../assets/group-11.png")}
            />
          </View>
        </View>
        <View style={[styles.button1, styles.button1Layout]}>
          <View style={[styles.rectangleParent, styles.button1Layout]}>
            <LinearGradient
              style={[styles.groupChild, styles.button1Layout]}
              locations={[0, 1]}
              colors={["rgba(145, 122, 253, 0.07)", "rgba(98, 70, 234, 0.07)"]}
            />
            <View style={styles.watchIntroVideoWrapper}>
              <Text style={[styles.watchIntroVideo, styles.readMoreTypo]}>
                Watch Intro video
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.detailsSection}>
          <View>
            <View style={styles.bajuCosplayTerbaikHanyaDiParent}>
              <Text style={[styles.bajuCosplayTerbaik, styles.readMoreTypo]}>
                Baju Cosplay Terbaik Hanya Di Sini.
              </Text>
              <Image
                style={[styles.frameItem, styles.containerLayout]}
                contentFit="cover"
                source={require("../assets/group-9.png")}
              />
            </View>
            <View style={styles.frameParent}>
              <View style={styles.frameGroup}>
                <View style={styles.maskGroupParent}>
                  <Image
                    style={styles.maskGroupIcon}
                    contentFit="cover"
                    source={require("../assets/mask-group1.png")}
                  />
                  <Text style={[styles.reviews, styles.reviewsTypo]}>
                    <Text style={styles.text1}>4.1</Text>
                    <Text style={styles.reviews1}> (66 reviews)</Text>
                  </Text>
                </View>
                <View
                  style={[
                    styles.vuesaxboldlocationParent,
                    styles.parentSpaceBlock,
                  ]}
                >
                  <Image
                    style={styles.maskGroupIcon}
                    contentFit="cover"
                    source={require("../assets/vuesaxboldlocation1.png")}
                  />
                  <Text style={[styles.kapanJorpati, styles.reviewsTypo]}>
                    Kapan, Jorpati
                  </Text>
                </View>
              </View>
              <View style={styles.frameContainer}>
                <View style={styles.groupParent}>
                  <Image
                    style={styles.frameInner}
                    contentFit="cover"
                    source={require("../assets/group-21.png")}
                  />
                  <Text style={[styles.allSize, styles.allSizeTypo]}>
                    All Size
                  </Text>
                </View>
                <View style={styles.vuesaxboldhomeHashtagParent}>
                  <Image
                    style={styles.frameInner}
                    contentFit="cover"
                    source={require("../assets/vuesaxboldhomehashtag1.png")}
                  />
                  <Text style={[styles.allSize, styles.allSizeTypo]}>
                    874 m2
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.additional}>
            <View style={styles.locationParent}>
              <View style={styles.location}>
                <Image
                  style={styles.locationChild}
                  contentFit="cover"
                  source={require("../assets/frame-125.png")}
                />
              </View>
              <View style={styles.neighborhoodDetail}>
                <View style={styles.neighborhoodDetailInner}>
                  <View>
                    <Text
                      style={[
                        styles.aboutLocationsNeighborhood,
                        styles.readMoreTypo,
                      ]}
                    >
                      About location’s neighborhood
                    </Text>
                    <Text
                      style={[styles.thisCabinComes, styles.thisCabinComesTypo]}
                    >{`This cabin comes with Smart Home System and beautiful viking style. You can see sunrise in the morning with City View from full Glass Window.

This unit is surrounded by business district of West Surabaya that offers you the city life as well as wide range of culinary.

This apartment equipped with Washing Machine, Electric Stove, Microwave, Refrigerator, Cutlery.`}</Text>
                  </View>
                </View>
                <Pressable
                  style={styles.neighborhoodDetailChild}
                  onPress={() => navigation.navigate("Checkout")}
                >
                  <View style={styles.adancePaymentParent}>
                    <Text style={[styles.adancePayment, styles.monthTypo]}>
                      Adance Payment
                    </Text>
                    <Text style={[styles.month, styles.monthTypo]}>
                      500$/month
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View style={styles.owner}>
                <View style={styles.frameView}>
                  <Image
                    style={styles.frameIcon}
                    contentFit="cover"
                    source={require("../assets/frame-77.png")}
                  />
                  <View style={styles.bhuwanKcParent}>
                    <Text style={[styles.bhuwanKc, styles.allSizeTypo]}>
                      Bhuwan K.C
                    </Text>
                    <Text style={[styles.propertyOwner, styles.textTypo]}>
                      Property owner
                    </Text>
                  </View>
                </View>
                <View style={styles.ownerInner}>
                  <Image
                    style={styles.containerLayout}
                    contentFit="cover"
                    source={require("../assets/group-15.png")}
                  />
                </View>
              </View>
              <View style={styles.testimonials}>
                <Text
                  style={[
                    styles.aboutLocationsNeighborhood,
                    styles.readMoreTypo,
                  ]}
                >
                  Testimonials
                </Text>
                <View style={styles.frameParent1}>
                  <View>
                    <View style={styles.frameParent3}>
                      <Image
                        style={styles.frameIcon}
                        contentFit="cover"
                        source={require("../assets/frame-771.png")}
                      />
                      <View style={styles.bhuwanKcParent}>
                        <Text style={[styles.bhuwanKc, styles.allSizeTypo]}>
                          Bijay Shahi
                        </Text>
                        <View style={styles.parentSpaceBlock}>
                          <Image
                            style={styles.frameChildLayout}
                            contentFit="cover"
                            source={require("../assets/frame-204.png")}
                          />
                          <Image
                            style={[
                              styles.frameChild3,
                              styles.frameChildLayout,
                            ]}
                            contentFit="cover"
                            source={require("../assets/frame-204.png")}
                          />
                          <Image
                            style={[
                              styles.frameChild3,
                              styles.frameChildLayout,
                            ]}
                            contentFit="cover"
                            source={require("../assets/frame-204.png")}
                          />
                          <Image
                            style={[
                              styles.frameChild3,
                              styles.frameChildLayout,
                            ]}
                            contentFit="cover"
                            source={require("../assets/frame-204.png")}
                          />
                          <Image
                            style={[
                              styles.frameChild3,
                              styles.frameChildLayout,
                            ]}
                            contentFit="cover"
                            source={require("../assets/frame-204.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <Text style={[styles.myWifeAndContainer, styles.textTypo]}>
                      <Text
                        style={styles.myWifeAnd}
                      >{`My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer to where we work and play in Portland. David and his skilled team helped make that dream a reality. The sale went smoothly, and we just closed on an ideal new place we're excited to call home...  `}</Text>
                      <Text style={styles.readMoreTypo}>Read more</Text>
                    </Text>
                  </View>
                  <View style={styles.frameParent5}>
                    <View style={styles.frameParent3}>
                      <Image
                        style={styles.frameIcon}
                        contentFit="cover"
                        source={require("../assets/frame-772.png")}
                      />
                      <View style={styles.bhuwanKcParent}>
                        <Text style={[styles.bhuwanKc, styles.allSizeTypo]}>
                          C_LU Pokhrel
                        </Text>
                        <View style={styles.parentSpaceBlock}>
                          <Image
                            style={styles.frameChildLayout}
                            contentFit="cover"
                            source={require("../assets/frame-2041.png")}
                          />
                          <Image
                            style={[
                              styles.frameChild3,
                              styles.frameChildLayout,
                            ]}
                            contentFit="cover"
                            source={require("../assets/frame-2041.png")}
                          />
                          <Image
                            style={[
                              styles.frameChild3,
                              styles.frameChildLayout,
                            ]}
                            contentFit="cover"
                            source={require("../assets/frame-2041.png")}
                          />
                          <Image
                            style={[
                              styles.frameChild3,
                              styles.frameChildLayout,
                            ]}
                            contentFit="cover"
                            source={require("../assets/frame-2041.png")}
                          />
                          <Image
                            style={[
                              styles.frameChild3,
                              styles.frameChildLayout,
                            ]}
                            contentFit="cover"
                            source={require("../assets/frame-2041.png")}
                          />
                        </View>
                      </View>
                    </View>
                    <Text style={[styles.myWifeAndContainer, styles.textTypo]}>
                      <Text
                        style={styles.myWifeAnd}
                      >{`My wife & I have moved 6 times in the last 25 years. Obviously, we've dealt with many realtors both on the buying and selling side. I have to say that David is by far the BEST realtor we've ever worked with, his professionalism, personality, attention to detail, responsiveness and... `}</Text>
                      <Text style={styles.readMoreTypo}>Read more</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <BotNav />
      </View>

      <Modal animationType="fade" transparent visible={groupIconVisible}>
        <View style={styles.groupIconOverlay}>
          <Pressable style={styles.groupIconBg} onPress={closeGroupIcon} />
          <Home onClose={closeGroupIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  picturebuttonsPosition: {
    width: 375,
    top: 0,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  textTypo: {
    letterSpacing: 0.3,
    fontSize: FontSize.mainCaptionRegular_size,
    textAlign: "left",
  },
  button1Layout: {
    height: 48,
    width: 343,
    position: "absolute",
  },
  readMoreTypo: {
    fontFamily: FontFamily.hindBold,
    fontWeight: "700",
  },
  containerLayout: {
    height: 40,
    width: 40,
  },
  reviewsTypo: {
    lineHeight: 21,
    marginLeft: 8,
    fontSize: FontSize.paragraphP1Medium_size,
    textAlign: "left",
    fontFamily: FontFamily.hindRegular,
    letterSpacing: 0.3,
  },
  parentSpaceBlock: {
    marginTop: 10,
    flexDirection: "row",
  },
  allSizeTypo: {
    lineHeight: 16,
    fontSize: FontSize.paragraphP1Medium_size,
    textAlign: "left",
    fontFamily: FontFamily.hindRegular,
    letterSpacing: 0.3,
  },
  thisCabinComesTypo: {
    fontSize: FontSize.paragraphP1Medium_size,
    textAlign: "left",
  },
  monthTypo: {
    color: Color.neutralGray0,
    lineHeight: 16,
    fontFamily: FontFamily.hindBold,
    fontWeight: "700",
    fontSize: FontSize.paragraphP1Medium_size,
    letterSpacing: 0.3,
  },
  frameChildLayout: {
    height: 14,
    width: 14,
  },
  text: {
    textAlign: "left",
    color: Color.foundationBlueDark,
    fontFamily: FontFamily.hindRegular,
  },
  wrapper: {
    top: 228,
    left: 301,
    borderRadius: 40,
    width: 58,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: Color.foundationWhiteLightHover,
  },
  icon: {
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  picturebuttons: {
    height: 269,
  },
  batteryIcon: {
    right: 0,
    width: 24,
    height: 11,
    top: 0,
    position: "absolute",
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
    overflow: "hidden",
  },
  groupIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  buttonInner: {
    marginLeft: 263,
    flexDirection: "row",
  },
  button: {
    top: 56,
    left: 16,
    flexDirection: "row",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_35xl,
    borderColor: "#917afd",
    borderWidth: 1.5,
    borderStyle: "solid",
    backgroundColor: "transparent",
    top: 0,
    left: 0,
  },
  watchIntroVideo: {
    fontSize: FontSize.paragraphP1Medium_size,
    textAlign: "left",
  },
  watchIntroVideoWrapper: {
    top: 13,
    left: 111,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
    left: 0,
  },
  button1: {
    top: 287,
    left: 16,
  },
  bajuCosplayTerbaik: {
    fontSize: FontSize.size_xl,
    lineHeight: 28,
    width: 216,
    height: 53,
    textAlign: "left",
    color: Color.foundationBlueDark,
  },
  frameItem: {
    marginLeft: 97,
  },
  bajuCosplayTerbaikHanyaDiParent: {
    justifyContent: "center",
    flexDirection: "row",
  },
  maskGroupIcon: {
    width: 18,
    height: 18,
  },
  text1: {
    color: Color.foundationBlueDark,
  },
  reviews1: {
    color: Color.navGray,
  },
  reviews: {
    marginLeft: 8,
  },
  maskGroupParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  kapanJorpati: {
    color: Color.navGray,
    marginLeft: 8,
  },
  vuesaxboldlocationParent: {
    alignItems: "center",
  },
  frameGroup: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameInner: {
    width: 19,
    height: 19,
  },
  allSize: {
    color: Color.navGray,
    marginLeft: 8,
  },
  groupParent: {
    top: -2,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  vuesaxboldhomeHashtagParent: {
    top: 29,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  frameContainer: {
    top: 3,
    left: 201,
    width: 76,
    height: 46,
    position: "absolute",
  },
  frameParent: {
    height: 52,
    marginTop: 16,
    width: 343,
  },
  divider: {
    borderColor: Color.colorLightgray,
    borderTopWidth: 0.6,
    width: 344,
    height: 1,
    marginTop: 28,
    borderStyle: "solid",
  },
  locationChild: {
    borderRadius: Border.br_3xs,
    height: 209,
    width: 343,
    overflow: "hidden",
  },
  location: {
    top: 90,
    left: 0,
    position: "absolute",
  },
  aboutLocationsNeighborhood: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0.4,
    lineHeight: 18,
    textAlign: "left",
    color: Color.foundationBlueDark,
  },
  thisCabinComes: {
    letterSpacing: 0.2,
    lineHeight: 24,
    height: 240,
    marginTop: 20,
    color: Color.navGray,
    width: 343,
    fontFamily: FontFamily.hindRegular,
  },
  neighborhoodDetailInner: {
    width: 343,
  },
  adancePayment: {
    textAlign: "left",
  },
  month: {
    textAlign: "right",
    marginLeft: 76,
  },
  adancePaymentParent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  neighborhoodDetailChild: {
    borderRadius: 90,
    backgroundColor: "#5b61fc",
    borderColor: "#183ce0",
    borderWidth: 0.6,
    padding: 15,
    marginTop: 32,
    borderStyle: "solid",
    width: 343,
    justifyContent: "center",
    alignItems: "center",
  },
  neighborhoodDetail: {
    top: 347,
    left: 0,
    position: "absolute",
  },
  frameIcon: {
    width: 42,
    height: 42,
  },
  bhuwanKc: {
    color: Color.foundationBlueDark,
  },
  propertyOwner: {
    lineHeight: 14,
    marginTop: 8,
    color: Color.navGray,
    textAlign: "left",
    fontFamily: FontFamily.hindRegular,
  },
  bhuwanKcParent: {
    marginLeft: 10,
  },
  frameView: {
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    left: 0,
    position: "absolute",
  },
  ownerInner: {
    top: 6,
    left: 303,
    flexDirection: "row",
    position: "absolute",
  },
  owner: {
    height: 42,
    width: 343,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameChild3: {
    marginLeft: 8,
  },
  frameParent3: {
    backgroundColor: Color.neutralGray0,
    alignItems: "center",
    flexDirection: "row",
  },
  myWifeAnd: {
    color: Color.navGray,
    fontFamily: FontFamily.hindRegular,
  },
  myWifeAndContainer: {
    lineHeight: 22,
    height: 129,
    marginTop: 17,
    width: 343,
    textAlign: "left",
  },
  frameParent5: {
    marginTop: 32,
  },
  frameParent1: {
    marginTop: 24,
  },
  testimonials: {
    top: 746,
    left: 0,
    position: "absolute",
  },
  locationParent: {
    height: 1593,
    width: 343,
  },
  additional: {
    height: 1593,
    marginTop: 28,
  },
  detailsSection: {
    top: 357,
    height: 1773,
    left: 16,
    position: "absolute",
  },
  propertyDetails: {
    flex: 1,
    height: 1897,
    width: "100%",
    backgroundColor: Color.foundationWhiteLightHover,
  },
});

export default PropertyDetails;

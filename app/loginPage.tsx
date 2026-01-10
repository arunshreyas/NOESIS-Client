import { OAuthButton } from "@/components/oauthButton";
import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function LoginPage() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.bgCircleOne} />
      <View style={styles.bgCircleTwo} />

      <View style={styles.center}>
        <Text style={styles.logo}>Noesis</Text>
        <Text style={styles.tagline}>Smart habit tracking, simplified.</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Welcome back</Text>
          <Text style={styles.cardSubtitle}>
            Sign in to sync your habits across devices
          </Text>

          <View style={styles.buttons}>
            <OAuthButton provider="google" onPress={() => {}} />
            <View style={styles.spacer} />
            <OAuthButton provider="github" onPress={() => {}} />
            <View style={styles.spacer} />
            <OAuthButton provider="discord" onPress={() => {}} />
          </View>
        </View>

        <Text style={styles.footer}>
          By continuing you agree to our Terms and Privacy Policy.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F5F7FB",
    position: "relative",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  logo: {
    fontSize: 36,
    fontWeight: "800",
    color: "#0F1724",
    marginBottom: 6,
  },
  tagline: {
    fontSize: 14,
    color: "#475569",
    marginBottom: 20,
  },
  card: {
    width: Math.min(520, width - 48),
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F1724",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#64748B",
    marginBottom: 16,
  },
  buttons: {
    width: "100%",
    gap: 12,
  },
  spacer: {
    height: 12,
  },
  footer: {
    fontSize: 12,
    color: "#94A3B8",
    marginTop: 18,
    textAlign: "center",
    maxWidth: 420,
  },
  bgCircleOne: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "#E6EEF9",
    top: -80,
    left: -80,
    opacity: 0.9,
  },
  bgCircleTwo: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "#FDECEF",
    bottom: -60,
    right: -60,
    opacity: 0.9,
  },
});

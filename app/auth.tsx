import { OAuthButton } from "@/components/oauth-button";
import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import {
  ActivityIndicator,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

export default function AuthScreen() {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === "web";
  const isLargeScreen = width > 900;
  const [loading, setLoading] = useState(false);
  const [loadingProvider, setLoadingProvider] = useState<
    "google" | "github" | "discord" | null
  >(null);

  const layoutConfig = useMemo(() => {
    if (!isWeb) {
      return { logoSize: 72, appNameSize: 32, taglineSize: 17, headerGap: 40 };
    }
    if (isLargeScreen) {
      return { logoSize: 96, appNameSize: 40, taglineSize: 18, headerGap: 60 };
    }
    return { logoSize: 80, appNameSize: 36, taglineSize: 18, headerGap: 48 };
  }, [isWeb, isLargeScreen]);

  const handleGoogleAuth = async () => {
    setLoading(true);
    setLoadingProvider("google");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setLoadingProvider(null);
  };

  const handleGithubAuth = async () => {
    setLoading(true);
    setLoadingProvider("github");

    async function loginWithGitHub() {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/auth/github/login",
          {
            method: "GET",
          }
        );
        if (response.ok) {
          // Handle successful login
        }
      } catch (error) {
        console.error("GitHub login error:", error);
      }
    }

    await loginWithGitHub();

    setLoading(false);
    setLoadingProvider(null);
  };

  const handleDiscordAuth = async () => {
    setLoading(true);
    setLoadingProvider("discord");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setLoadingProvider(null);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#3B82F6" />
          <Text style={styles.loadingText}>Securely connecting...</Text>
          <Text style={styles.loadingSubtext}>
            {loadingProvider === "google"
              ? "Authenticating with Google"
              : loadingProvider === "github"
                ? "Authenticating with GitHub"
                : "Authenticating with Discord"}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={[styles.content, isWeb && styles.contentWeb]}>
        <View style={[styles.headerWrapper, isWeb && styles.headerWrapperWeb]}>
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <View
                style={[
                  styles.logo,
                  {
                    width: layoutConfig.logoSize,
                    height: layoutConfig.logoSize,
                    borderRadius: layoutConfig.logoSize * 0.28,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.logoText,
                    { fontSize: layoutConfig.logoSize * 0.5 },
                  ]}
                >
                  N
                </Text>
              </View>
            </View>
            <Text
              style={[styles.appName, { fontSize: layoutConfig.appNameSize }]}
            >
              Noesis
            </Text>
            <Text
              style={[
                styles.tagline,
                {
                  fontSize: layoutConfig.taglineSize,
                  marginTop: layoutConfig.headerGap * 0.15,
                },
              ]}
            >
              Build habits that actually last.
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.authButtonsWrapper,
            isWeb && isLargeScreen && styles.authButtonsWrapperLarge,
          ]}
        >
          <View
            style={[
              styles.authButtons,
              isWeb && isLargeScreen && styles.authButtonsGrid,
            ]}
          >
            <OAuthButton
              provider="google"
              onPress={handleGoogleAuth}
              loading={loading && loadingProvider === "google"}
            />

            <OAuthButton
              provider="github"
              onPress={handleGithubAuth}
              loading={loading && loadingProvider === "github"}
            />

            <OAuthButton
              provider="discord"
              onPress={handleDiscordAuth}
              loading={loading && loadingProvider === "discord"}
            />
          </View>
        </View>

        <View style={[styles.footer, isWeb && styles.footerWeb]}>
          <Text style={styles.footerText}>
            No passwords. No tracking.{"\n"}You stay in control.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  contentWeb: {
    maxWidth: 1200,
    paddingTop: 80,
    paddingBottom: 60,
  },
  headerWrapper: {
    width: "100%",
    maxWidth: 500,
  },
  headerWrapperWeb: {
    marginBottom: 48,
  },
  header: {
    alignItems: "center",
    paddingTop: 0,
  },
  logoContainer: {
    marginBottom: 24,
  },
  logo: {
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#3B82F6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  logoText: {
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: -0.5,
  },
  appName: {
    fontWeight: "700",
    color: "#111827",
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  tagline: {
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "400",
  },
  authButtonsWrapper: {
    width: "100%",
    maxWidth: 500,
    alignItems: "center",
  },
  authButtonsWrapperLarge: {
    maxWidth: "100%",
  },
  authButtons: {
    gap: 16,
    paddingHorizontal: 8,
    width: "100%",
  },
  authButtonsGrid: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 0,
    maxWidth: 600,
    justifyContent: "center",
  },
  footer: {
    alignItems: "center",
    paddingTop: 24,
    width: "100%",
    maxWidth: 500,
  },
  footerWeb: {
    marginTop: 32,
  },
  footerText: {
    fontSize: 14,
    color: "#9CA3AF",
    textAlign: "center",
    lineHeight: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  loadingText: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  loadingSubtext: {
    marginTop: 8,
    fontSize: 14,
    color: "#6B7280",
  },
});

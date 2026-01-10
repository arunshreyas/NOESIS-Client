import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type OAuthProvider = "google" | "github" | "discord";

interface OAuthButtonProps {
  provider: OAuthProvider;
  onPress: () => void;
  loading?: boolean;
}

const providerConfig = {
  google: {
    label: "Continue with Google",
    backgroundColor: "#FFFFFF",
    textColor: "#1A1A1A",
    borderColor: "#D4D4D4",
    icon: "",
  },
  github: {
    label: "Continue with GitHub",
    backgroundColor: "#2C2C2C",
    textColor: "#FFFFFF",
    borderColor: "#2C2C2C",
    icon: "",
  },
  discord: {
    label: "Continue with Discord",
    backgroundColor: "#5865F2",
    textColor: "#FFFFFF",
    borderColor: "#5865F2",
    icon: "",
  },
};

export function OAuthButton({
  provider,
  onPress,
  loading = false,
}: OAuthButtonProps) {
  const config = providerConfig[provider];

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: config.backgroundColor,
          borderColor: config.borderColor,
        },
      ]}
      onPress={onPress}
      disabled={loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={config.textColor} />
      ) : (
        <View style={styles.content}>
          <Text style={styles.icon}>{config.icon}</Text>
          <Text style={[styles.label, { color: config.textColor }]}>
            {config.label}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 54,
    borderRadius: 16,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  icon: {
    fontSize: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: -0.1,
  },
});

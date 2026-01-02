import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type OAuthProvider = 'google' | 'apple';

interface OAuthButtonProps {
  provider: OAuthProvider;
  onPress: () => void;
  loading?: boolean;
}

const providerConfig = {
  google: {
    label: 'Continue with Google',
    backgroundColor: '#FFFFFF',
    textColor: '#1F2937',
    borderColor: '#E5E7EB',
    icon: '🔷',
  },
  apple: {
    label: 'Continue with Apple',
    backgroundColor: '#000000',
    textColor: '#FFFFFF',
    borderColor: '#000000',
    icon: '',
  },
};

export function OAuthButton({ provider, onPress, loading = false }: OAuthButtonProps) {
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
      activeOpacity={0.8}>
      {loading ? (
        <ActivityIndicator color={config.textColor} />
      ) : (
        <View style={styles.content}>
          <Text style={styles.icon}>{config.icon}</Text>
          <Text style={[styles.label, { color: config.textColor }]}>{config.label}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 56,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  icon: {
    fontSize: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});

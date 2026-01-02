import { OAuthButton } from '@/components/oauth-button';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function AuthScreen() {
  const [loading, setLoading] = useState(false);
  const [loadingProvider, setLoadingProvider] = useState<'google' | 'github' | 'discord' | null>(null);

  const handleGoogleAuth = async () => {
    setLoading(true);
    setLoadingProvider('google');

    await new Promise(resolve => setTimeout(resolve, 2000));

    setLoading(false);
    setLoadingProvider(null);
  };

  const handleGithubAuth = async () => {
    setLoading(true);
    setLoadingProvider('github');

    await new Promise(resolve => setTimeout(resolve, 2000));

    setLoading(false);
    setLoadingProvider(null);
  };

  const handleDiscordAuth = async () => {
    setLoading(true);
    setLoadingProvider('discord');

    await new Promise(resolve => setTimeout(resolve, 2000));

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
            {loadingProvider === 'google'
              ? 'Authenticating with Google'
              : loadingProvider === 'github'
                ? 'Authenticating with GitHub'
                : 'Authenticating with Discord'}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={[styles.content, Platform.OS === 'web' && styles.contentWeb]}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>N</Text>
            </View>
          </View>
          <Text style={styles.appName}>Noesis</Text>
          <Text style={styles.tagline}>Build habits that actually last.</Text>
        </View>

        <View style={[styles.authButtons, Platform.OS === 'web' && styles.authButtonsWeb]}>
          <OAuthButton
            provider="google"
            onPress={handleGoogleAuth}
            loading={loading && loadingProvider === 'google'}
          />

          <OAuthButton
            provider="github"
            onPress={handleGithubAuth}
            loading={loading && loadingProvider === 'github'}
          />

          <OAuthButton
            provider="discord"
            onPress={handleDiscordAuth}
            loading={loading && loadingProvider === 'discord'}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            No passwords. No tracking.{'\n'}You stay in control.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  contentWeb: {
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
  },
  logoContainer: {
    marginBottom: 24,
  },
  logo: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  logoText: {
    fontSize: 36,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  appName: {
    fontSize: 32,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  tagline: {
    fontSize: 17,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '400',
  },
  authButtons: {
    gap: 16,
    paddingHorizontal: 8,
  },
  authButtonsWeb: {
    paddingHorizontal: 0,
  },
  footer: {
    alignItems: 'center',
    paddingTop: 24,
  },
  footerText: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  loadingText: {
    marginTop: 24,
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  loadingSubtext: {
    marginTop: 8,
    fontSize: 14,
    color: '#6B7280',
  },
});

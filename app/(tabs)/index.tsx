import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Noesis Demo
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          View the authentication screen designed for this habit tracking app.
        </ThemedText>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/auth')}
          activeOpacity={0.8}>
          <ThemedText style={styles.buttonText}>View Auth Screen</ThemedText>
        </TouchableOpacity>

        <View style={styles.info}>
          <ThemedText style={styles.infoText}>
            This authentication screen features:
          </ThemedText>
          <ThemedText style={styles.bulletPoint}>• OAuth-only authentication</ThemedText>
          <ThemedText style={styles.bulletPoint}>• Google and Apple sign-in</ThemedText>
          <ThemedText style={styles.bulletPoint}>• Clean, minimal design</ThemedText>
          <ThemedText style={styles.bulletPoint}>• Privacy-first messaging</ThemedText>
          <ThemedText style={styles.bulletPoint}>• Loading states</ThemedText>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    opacity: 0.8,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 48,
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  info: {
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(59, 130, 246, 0.05)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.1)',
  },
  infoText: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  bulletPoint: {
    fontSize: 14,
    marginVertical: 4,
    opacity: 0.8,
  },
});

import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useStats } from '@/hooks/useStats'
import { Foundation } from '@expo/vector-icons'

export default function StatsUpdater() {
  const { refresh, lastUpdated, loading } = useStats()

  return (
    <View style={styles.container}>
      <Pressable
        onPress={refresh}
        disabled={loading}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
          loading && styles.buttonDisabled,
        ]}
      >
        <Foundation name='refresh' style={styles.updateIcon} />
      </Pressable>
      <Text style={styles.text}>Última actualización: {lastUpdated}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 12,
    opacity: 0.7,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#4ded8f',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonPressed: {
    backgroundColor: '#27ae60',
  },
  buttonDisabled: {
    backgroundColor: '#555',
  },
  updateIcon: {
    color: 'white',
    fontSize: 24,
  },
})

import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useStats } from '@/hooks/useStats'

export default function StatsUpdater() {
  const { refresh, lastUpdated, loading } = useStats()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Última actualización: {lastUpdated}</Text>
      <Pressable
        onPress={refresh}
        disabled={loading}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
          loading && styles.buttonDisabled,
        ]}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Actualizando...' : 'Actualizar'}
        </Text>
      </Pressable>
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
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonPressed: {
    backgroundColor: '#1C86EE',
  },
  buttonDisabled: {
    backgroundColor: '#555',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
})

import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native'
import stats from '../data/stats'
import Card from '@/components/Card'
import { useStats } from '@/hooks/useStats'

export default function Index() {
  const { stats, loading } = useStats()

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />

      <View style={styles.rootContainer}>
        <Text style={styles.title}>ArgDashboard</Text>
        <View style={styles.statsContainer}>
          {loading ? (
            <ActivityIndicator size='large' color='white' />
          ) : (
            stats.map((stat, index) => (
              <Card
                key={index} // TODO: replace index by something
                name={stat.name}
                value={stat.value}
                unit={stat.unit}
                color={stat.color}
              />
            ))
          )}
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 16,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 45,
    fontWeight: 'bold',
  },
  statsContainer: {
    padding: 16,
    alignItems: 'center',
  },
})

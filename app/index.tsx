import { StatusBar, StyleSheet, View, Text } from 'react-native'
import stats from '../data/stats'
import Card from '@/components/Card'

export default function Index() {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />

      <View style={styles.rootContainer}>
        <Text style={styles.title}>ArgDashboard</Text>
        <View style={styles.statsContainer}>
          {stats.map(stat => (
            <Card
              key={stat.id}
              name={stat.name}
              value={stat.value}
              unit={stat.unit}
              color={stat.color}
            />
          ))}
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

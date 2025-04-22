import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Platform,
  ScrollView,
} from 'react-native'
import Card from '@/components/Card'
import { useStats } from '@/hooks/useStats'
import StatsUpdater from '@/components/statsUpdater'
// import { usePushNotifications } from '@/hooks/usePushNotifications'

export default function Index() {
  // usePushNotifications() TODO
  const { stats, loading, lastUpdated } = useStats()
  const isWeb = Platform.OS === 'web'

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />

      <View style={styles.rootContainer}>
        <Text style={styles.title}>ArgDashboard</Text>
        <ScrollView
          contentContainerStyle={[
            styles.statsContainer,
            isWeb && styles.statsContainerWeb,
          ]}
        >
          {loading ? (
            <ActivityIndicator size='large' color='white' />
          ) : (
            stats.map(stat => (
              <Card
                key={stat.name}
                name={stat.name}
                value={stat.value}
                unit={stat.unit}
                color={stat.color}
              />
            ))
          )}
        </ScrollView>
      </View>
      <StatsUpdater />
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
  statsContainerWeb: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 12,
    opacity: 0.7,
  },
})

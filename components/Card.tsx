import { StyleSheet, Text, View } from 'react-native'

type CardProps = {
  name: string
  value: number
  unit?: string
  color: string
}

const Card = ({ name, value, unit, color }: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={[styles.name, { color: color }]}>{name}</Text>
      <Text style={styles.value}>
        {unit === '$' ? `${unit} ${value}` : `${value} ${unit ? unit : ''}`}
      </Text>
    </View>
  )
}
export default Card

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#1A1A1A',
    width: '90%',
    // height: 100,
    borderRadius: 8,
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  name: {
    fontSize: 20,
  },
  value: {
    color: 'white',
    fontSize: 50,
  },
})

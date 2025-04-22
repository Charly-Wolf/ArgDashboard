import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  useWindowDimensions,
} from 'react-native'

type CardProps = {
  name: string
  value: number
  unit?: string
  color?: string
}

const Card = ({ name, value, unit, color }: CardProps) => {
  const { width } = useWindowDimensions()
  const isLargeScreen = width > 600

  const handleCardPress = async () => {
    let url = ''
    if (name === 'Dólar oficial') {
      url = 'https://www.dolarito.ar/'
      Linking.openURL(url)
    } else if (name === 'Riesgo País') {
      url = 'https://www.rava.com/perfil/riesgo%20pais'
      Linking.openURL(url)
    }
  }

  return (
    <TouchableOpacity
      style={[styles.cardContainer, isLargeScreen && styles.cardContainerWeb]}
      onPress={handleCardPress}
    >
      <Text style={[styles.name, { color: color }]}>{name}</Text>
      <Text style={styles.value}>
        {unit === '$' ? `${unit} ${value}` : `${value} ${unit ? unit : ''}`}
      </Text>
    </TouchableOpacity>
  )
}
export default Card

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#1A1A1A',
    width: '90%',
    borderRadius: 8,
    margin: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
  },
  cardContainerWeb: {
    width: '40%',
    margin: 24,
    maxWidth: 400,
  },
  name: {
    fontSize: 20,
  },
  value: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
})

import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'

type CardProps = {
  name: string
  value: number
  unit?: string
  color?: string
}

const Card = ({ name, value, unit, color }: CardProps) => {
  const handleCardPress = async () => {
    let url = ''
    if (name === 'Dólar oficial') {
      url = 'https://www.dolarito.ar/'
      Linking.openURL(url)
    } else if (name === 'Riesgo País') {
      Linking.openURL(url)
      url = 'https://www.rava.com/perfil/riesgo%20pais'
    }
  }

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleCardPress}>
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
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
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

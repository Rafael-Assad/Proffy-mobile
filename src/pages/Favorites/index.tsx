import { View, Text } from 'react-native'
import PageHeader from '../../components/PageHeader'

import styles from './style'


const Favorites = () => {
  return (
    <View  style={styles.container}>
      <PageHeader title='Meus Proffys Favoritos'/>
    </View>
  )
}

export default Favorites
import { View, Text } from 'react-native'
import PageHeader from '../../components/PageHeader'

import styles from './style'


const TeacherList = () => {
  return (
    <View  style={styles.container}>
      <PageHeader title='Proffys Disponíveis'/>
    </View>
  )
}

export default TeacherList
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'
import TeacherCard from '../../components/TeacherCard'

import styles from './style'


const Favorites = () => {
  return (
    <View  style={styles.container}>
      <PageHeader title='Meus Proffys Favoritos'/>


      <ScrollView style={styles.cardList}
        contentContainerStyle={{padding: 16}}
      >

        <TeacherCard/>
        <TeacherCard/>
        <TeacherCard/>
        <TeacherCard/>
        <TeacherCard/>
      </ScrollView>
    </View>
  )
}

export default Favorites
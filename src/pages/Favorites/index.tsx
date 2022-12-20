import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import { useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import PageHeader from '../../components/PageHeader'
import TeacherCard, { ClassDetails } from '../../components/TeacherCard'

import styles from './style'


const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  const loadFavorites = () =>{
    AsyncStorage.getItem('favorites')
    .then(response => {
      if(response) {
        const favTeachers = JSON.parse(response)

        setFavorites(favTeachers)
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites()
  })
  


  return (
    <View  style={styles.container}>
      <PageHeader title='Meus Proffys Favoritos'/>


      <ScrollView style={styles.cardList}
        contentContainerStyle={{padding: 16}}
      >
      {favorites.map( (classItem:ClassDetails) => {
        return (
          <TeacherCard key={classItem.id} id={classItem.id}
            name={classItem.name}
            subject={classItem.subject}
            avatar={classItem.avatar}
            bio={classItem.bio}
            cost={classItem.cost}
            whatsapp={classItem.whatsapp}
            favorite
          />
        )
      })}
      </ScrollView>
    </View>
  )
}

export default Favorites
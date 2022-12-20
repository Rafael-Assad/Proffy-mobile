import { useState } from 'react'
import { View, Text } from 'react-native'
import { BorderlessButton, RectButton, ScrollView, TextInput } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'; 
import PageHeader from '../../components/PageHeader'
import TeacherCard, { ClassDetails } from '../../components/TeacherCard'
import api from '../../services/api';

import styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';


const TeacherList = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [subject, setSubject] = useState('Música')
  const [weekDay, setWeekDay] = useState('2')
  const [time, setTime] = useState('14:00')
  const [classes, setclasses] = useState([])
  const [favorites, setFavorites] = useState<number[]>([])

  const loadFavorites = () =>{
    AsyncStorage.getItem('favorites')
    .then(response => {
      if(response) {
        const favTeachers = JSON.parse(response)
        const favTeachersIds = favTeachers.map( (teacher:ClassDetails) => teacher.id)

        setFavorites(favTeachersIds)

      }
    })
  }

  const handleSubmitFilter = async () =>{
    loadFavorites()

    await api.get('/classes',{params:{ subject, weekDay, time }})
      .then(response => setclasses(response.data))
      .catch(error => console.error(error))

      setIsFilterOpen(false)
  }

  const toogleFilter = () => setIsFilterOpen(!isFilterOpen)

  return (
    <View  style={styles.container}>
      <PageHeader title='Proffys Disponíveis'
        filterButton={(
          <BorderlessButton onPress={toogleFilter}>
            <Feather name="filter" size={24} color="#FFF" />
          </BorderlessButton>
        )}
      >
        {isFilterOpen && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>
              Matéria
            </Text>

            <TextInput style={styles.input}
              value={subject}
              onChangeText={ text => setSubject(text)}
              placeholder='Qual Matéria?'
              placeholderTextColor='#C1BCCC'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>
                  Dia da Semana
                </Text>

                <TextInput style={styles.input}
                  value={weekDay}
                  onChangeText={ text => setWeekDay(text)}
                  placeholder='Em Qual dia da Semana?'
                  placeholderTextColor='#C1BCCC'
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>
                  Horário
                </Text>

                <TextInput style={styles.input}
                  value={time}
                  onChangeText={ text => setTime(text)}
                  placeholder='Em Qual horário?'
                  placeholderTextColor='#C1BCCC'
                />
              </View>
            </View>

            <RectButton style={styles.submitButton}
              onPress={handleSubmitFilter}
            >
              <Text style={styles.submitButtonText}>
                Filtrar
              </Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView style={styles.cardList}
      contentContainerStyle={{padding: 16}}
      >
      {classes.map( (classItem:ClassDetails) => {
        return (
          <TeacherCard key={classItem.id} id={classItem.id}
            name={classItem.name}
            subject={classItem.subject}
            avatar={classItem.avatar}
            bio={classItem.bio}
            cost={classItem.cost}
            whatsapp={classItem.whatsapp}
            favorite={favorites.includes(classItem.id)}
          />
        )
      })}
      </ScrollView>
    </View>
  )
}

export default TeacherList
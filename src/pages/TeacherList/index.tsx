import { useState } from 'react'
import { View, Text } from 'react-native'
import { BorderlessButton, RectButton, ScrollView, TextInput } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'; 
import PageHeader from '../../components/PageHeader'
import TeacherCard from '../../components/TeacherCard'

import styles from './style'


const TeacherList = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

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
              placeholder='Qual Matéria?'
              placeholderTextColor='#C1BCCC'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>
                  Dia da Semana
                </Text>

                <TextInput style={styles.input}
                  placeholder='Em Qual dia da Semana?'
                  placeholderTextColor='#C1BCCC'
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>
                  Horário
                </Text>

                <TextInput style={styles.input}
                  placeholder='Em Qual horário?'
                  placeholderTextColor='#C1BCCC'
                />
              </View>
            </View>

            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}>
                Filtrar
              </Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView style={styles.cardList}
      contentContainerStyle={{
        padding: 16
      }}
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

export default TeacherList
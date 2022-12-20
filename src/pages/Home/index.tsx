import { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import { RootNavigationProp } from '../../@types/navigation'
import HomeImg from '../../assets/images/landing.png'
import StudyImg from '../../assets/images/icons/study.png'
import GiveClassesImg from '../../assets/images/icons/give-classes.png'
import HeartImg from '../../assets/images/icons/heart.png'

import styles from './style'
import api from '../../services/api'

const Home = () => {
  const { navigate } = useNavigation<RootNavigationProp>()

  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('connections')
      .then( response =>{
        const { total } = response.data

        setTotalConnections(total)
      })
  }, [])
  

  const NavigateToGiveClasses = () => navigate('GiveClasses')

  const NavigateToStudy = () => navigate('Study')

  return (
    <View style={styles.container}>
      <Image source={HomeImg} style={styles.banner}/>

      <Text style={styles.title}>
        Seja Bem Vindo! {'\n'}
        <Text style={styles.titleBold}>
          O que deseja fazer?
        </Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton style={[styles.button, styles.buttonPrimary]}
          onPress={NavigateToStudy}
        >
          <Image source={StudyImg}/>

          <Text style={styles.buttonText}>
            Estudar
          </Text>
        </RectButton>

        <RectButton style={[styles.button, styles.buttonSecondary]}
          onPress={NavigateToGiveClasses}
        >
          <Image source={GiveClassesImg}/>

          <Text style={styles.buttonText}>
            Dar Aulas
          </Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões já realizadas {'  '}

      <Image source={HeartImg}/>
      </Text>
    </View>
  )
}

export default Home
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './style'
import HomeImg from '../../assets/images/landing.png'
import StudyImg from '../../assets/images/icons/study.png'
import GiveClassesImg from '../../assets/images/icons/give-classes.png'
import HeartImg from '../../assets/images/icons/heart.png'
import { useNavigation } from '@react-navigation/native'
import { RootNavigationProp } from '../../@types/navigation'
import { RectButton } from 'react-native-gesture-handler'

const Home = () => {
  const { navigate } = useNavigation<RootNavigationProp>()

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
        Total de 5 conexões já realizadas {'  '}

      <Image source={HeartImg}/>
      </Text>
    </View>
  )
}

export default Home
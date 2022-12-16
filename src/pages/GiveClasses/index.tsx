import { View, Text, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './style'

const GiveClasses = () => {
  const { goBack } = useNavigation()

  const handleGoBack = () => goBack()

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBg} 
        source={giveClassesBgImage}
        resizeMode="contain"
      >

        <Text style={styles.title}>
          Quer ser um Proffy?
        </Text>

        <Text style={styles.description}>
          Para se cadastrar como professor, acesse nossa plataforma na web
        </Text>
      </ImageBackground>

      <RectButton style={styles.confirmationButton} onPress={handleGoBack}>
        <Text style={styles.buttonText}>
          Cadastrar na Web
        </Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses
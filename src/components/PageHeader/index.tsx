import { View, Text, Image } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { RootNavigationProp } from '../../@types/navigation'

import backImg from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import styles from './style'

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title = 'Bem-vindo ao caos'}:PageHeaderProps) => {
  const { navigate } = useNavigation<RootNavigationProp>()

  const handleGoBack = () => navigate('Home')

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backImg} resizeMode='contain'/>
        </BorderlessButton>

        <Image source={logoImg} resizeMode='contain'/>
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  )
}

export default PageHeader
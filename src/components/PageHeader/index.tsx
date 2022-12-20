import { ReactNode } from 'react'
import { View, Text, Image } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { RootNavigationProp } from '../../@types/navigation'

import backImg from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import styles from './style'

interface PageHeaderProps {
  title: string;
  filterButton?: ReactNode;
  children?: any;
}

const PageHeader = ({ title, filterButton, children}:PageHeaderProps) => {
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

      <View style={styles.header}>
        <Text style={styles.title}>
          {title}
        </Text>

        {filterButton}
      </View>

      {children}
    </View>
  )
}

export default PageHeader
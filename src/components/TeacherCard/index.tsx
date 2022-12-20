import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { View, Text, Image, Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import api from '../../services/api'

import styles from './style'

export interface ClassDetails {
  id: number;
  name: string;
  subject: string;
  avatar: string;
  bio:string;
  cost: string;
  whatsapp: string;
}

interface TeacherCarsProps extends ClassDetails {
  favorite: boolean
}

const TeacherCard = ({id, name, subject, avatar, bio, cost, whatsapp, favorite}: TeacherCarsProps) => {
  const [isFavorited, setIsFavorited] = useState<boolean>(favorite)

  const newConnection = async () => await api.post('connections', {user_id: id})

  const linkToWhats = () =>{
    // Fazer mudanças pra poder adicionar um texto personalizado 
    // além de ter o código de área como obrigatório
    // https://faq.whatsapp.com/425247423114725/
    //  pesquisar melhor whatsapp deep link
    newConnection()
    Linking.openURL(`whatsapp://send?&phone=+5511${whatsapp}`)
  }

  const toogleFavorites = async () => {
    const teacher = {id, name, subject, avatar, bio, cost, whatsapp}

    const favorites = await AsyncStorage.getItem('favorites')

      let favsArray = []

      if(favorites) favsArray = JSON.parse(favorites)

    if(isFavorited){
      const favIndex = favsArray.findIndex((teacheItem: ClassDetails) =>{
        return teacheItem.id === teacher.id
      })

      favsArray.splice(favIndex, 1)

      setIsFavorited(false)
    } else{
      favsArray.push(teacher)

      setIsFavorited(true)
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favsArray))
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar}
          source={{uri: avatar}}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>
            {name}
          </Text>

          <Text style={styles.subject}>
            {subject}
          </Text>
        </View>

      </View>
      <Text style={styles.bio}>
        {bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>
            R$ {parseInt(cost).toFixed(2)}
          </Text>
        </Text>

        <View style={styles.buttonsContaiers}>
          <RectButton onPress={toogleFavorites}
            style={[styles.favoriteButton,
                    isFavorited? styles.favorited :{}]}
          >
            {isFavorited 
            ? <Image source={unfavoriteIcon}/> 
            : <Image source={heartOutlineIcon}/>}
            
          </RectButton>

          <RectButton style={styles.contactButton}
            onPress={linkToWhats}
          >
            <Image source={whatsappIcon}/>

            <Text style={styles.contactButtonText}>
              Entrar em contato
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherCard
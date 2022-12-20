import { View, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './style'

const TeacherCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar}
          source={{uri: 'https://picsum.photos/200'}}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>
            Beijamin Arola
          </Text>

          <Text style={styles.subject}>
            Teoria do Caos
          </Text>
        </View>

      </View>
      <Text style={styles.bio}>
        Preciso de algum texto que possa se encaixar bem aqui, não sei o que fazer
        a não ser escrever qualquer coisa, como eu estou pensando agora, mas não acho que vou ter um texto tão adequado no final.
        {'\n'}

        No final das constas, isso não interssa, pois o que eu realmente preciso é colocar algo pra ver como fica, o que vai ser final sera dinâmico no fim das contas 
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>
            R$ 50,00
          </Text>
        </Text>

        <View style={styles.buttonsContaiers}>
          <RectButton style={styles.favoriteButton}>
            {/* <Image source={heartOutlineIcon}/> */}
            <Image source={unfavoriteIcon}/>
          </RectButton>

          <RectButton style={styles.contactButton}>
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
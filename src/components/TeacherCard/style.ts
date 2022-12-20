import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E6E6F0',
    backgroundColor: '#FFF',
    overflow: 'hidden'
  },
  profile: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EEE'
  },
  profileInfo:{
    marginLeft: 16
  },
  name:{
    fontSize: 20,
    fontFamily: 'Archivo_700Bold',
    color: '#32264D'
  },
  subject:{
    marginTop: 4,
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color:'#6A6180'
  },
  bio: {
    marginHorizontal: 24,
    lineHeight: 24,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color:'#6A6180'
  },
  footer:{
    marginTop: 24,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#FAFAFC',
  },
  price:{
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color:'#6A6180'
  },
  priceValue:{
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
    color:'#8257E5'
  },
  buttonsContaiers:{
    marginTop: 16,
    flexDirection: 'row'
  },
  favoriteButton:{
    width: 56,
    height: 56,
    marginRight: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8257E5'
  },
  favorited:{
    backgroundColor: '#E33D3D'
  },
  contactButton:{
    height: 56,
    marginRight: 8,
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#04D361'
  },
  contactButtonText:{
    marginLeft: 16,
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
    color:'#FFF'
  }
})

export default styles
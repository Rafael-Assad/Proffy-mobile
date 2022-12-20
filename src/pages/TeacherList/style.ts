import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F0F0F1'
  },
  cardList:{
    marginTop: -40
  },
  searchForm:{
    marginBottom: 24
  },
  label:{
    fontFamily: 'Poppins_400Regular',
    color: '#D4C2FF'
  },
  inputGroup:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inputBlock:{
    width: '48%'
  },
  input:{
    height: 54,
    marginTop: 4,
    marginBottom: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  submitButton:{
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#04D361'
  },
  submitButtonText:{
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
    color:'#FFF'
  },
})

export default styles
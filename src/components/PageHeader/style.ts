import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container:{
    padding: 40,
    backgroundColor: '#8257E5'
  },
  topBar:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title:{
    maxWidth: 160,
    marginVertical: 40,
    lineHeight: 32,
    fontSize: 24,
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export default styles
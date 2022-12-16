import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#8257E5",
    justifyContent: "center",
    padding: 40
  },
  imageBg:{
    flex: 1,
    justifyContent: "center",
  },
  title:{
    maxWidth: 180,
    lineHeight: 37,
    fontSize: 32,
    fontFamily: 'Archivo_700Bold',
    color: '#FFF'
  },
  description:{
    maxWidth: 240,
    marginTop: 24,
    lineHeight: 26,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#D4C2FF'
  },
  confirmationButton:{
    height: 58,
    marginVertical: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:  '#04D361'
  },
  buttonText:{
    fontSize: 16,
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
  }
})

export default styles
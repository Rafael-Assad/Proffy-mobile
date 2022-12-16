import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading'
import { Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins'
import { Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo'

import AppStack from './src/routes/AppStack';

export default function App() {
  let [fonstLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if(!fonstLoaded){
    return <AppLoading />
  }else{
    return (
      <>
        <AppStack/>
        <StatusBar style="light" />
      </>
    );
  }
}


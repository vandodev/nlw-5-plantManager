import React from 'react';
import AppLoading from 'expo-app-loading';
// import { Welcome } from './src/pages/Welcome';
// import { UserIdentification } from './src/pages/UserIdentification';
import { Confirmation } from './src/pages/Confirmation';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

export default function app (){

const [fontsLoaded] = useFonts({
  Jost_400Regular,
  Jost_600SemiBold
});

if(!fontsLoaded){
  return <AppLoading/>
}

  return(
    // <Welcome />
    // <UserIdentification />
    <Confirmation />
  );
}

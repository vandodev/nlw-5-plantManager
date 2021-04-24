import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';
import Routes from './src/routes/';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import { PlantProps } from './src/libs/storage';

export default function app (){

const [fontsLoaded] = useFonts({
  Jost_400Regular,
  Jost_600SemiBold
});

useEffect(() => {
  async function notifications(){
  await Notifications.cancelAllScheduledNotificationsAsync();

   const data = await Notifications.getAllScheduledNotificationsAsync();
   console.log('##### Notificações agendadas #####');
   console.log(data);

  }
  notifications();
}, [])

if(!fontsLoaded){
  return <AppLoading/>
}

  return(
    <Routes />
  );
}

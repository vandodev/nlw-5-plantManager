
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function PlantSelect() { 
    return(
        <View style={styles.container}>
            <Text>Selecionar uma planta</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: colors.background
    },
   
  })
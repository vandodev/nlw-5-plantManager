
import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import {Header} from '../components/Header'
import { EnvironmentButton } from '../components/EnvironmentButton';

export function PlantSelect() { 
    return(
        <View style={styles.container}>

            <View style={styles.header}>

                <Header />

                <Text style={styles.title}>
                    Em qual ambiente
                </Text>

                <Text style={styles.subtitle}>
                    você quer colocar sua planta?
                </Text>

            </View>
            
            <View>
                <FlatList
                 data={[1,2,3]}
                 renderItem={({item}) =>(
                    <EnvironmentButton title="Cozinha" active/>
                 )}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 contentContainerStyle={styles.environmentList}
                />
            </View>
            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background
    },

    header: {
        paddingHorizontal: 30
    },

    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },

    subtitle: {
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading
    },
    
    environmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginVertical: 32
    },
   
  })
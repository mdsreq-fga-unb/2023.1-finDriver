import React from 'react'
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
  
const ProgressBar = ({progress}) => {
     
    const styles = StyleSheet.create({
        Parentdiv: {
            height: 18,
            width: '100%',
            backgroundColor: 'whitesmoke',
            borderRadius: 40,
            marginBottom: 5
        },
      
        Childdiv: {
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#79ae92',
            borderRadius:40,
            textAlign: 'right'
        },
      
        progresstext: {
            paddingHorizontal: 10,
            color: 'white',
            fontWeight: 'bold',
            fontSize: 12
        }
    })
        
    return (
        <View style={styles.Parentdiv}>
        <View style={styles.Childdiv}>
            <Text style={styles.progresstext}>{`${progress}%`}</Text>
        </View>
        </View>
    )
}
  
export default ProgressBar;
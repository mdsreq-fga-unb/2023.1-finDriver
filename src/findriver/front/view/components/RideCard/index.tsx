import React from "react";
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const RideCard = (props) => {
    return(
        <View>

            <Pressable style={styles.body}>
                <View style={styles.container}>

                <View style={styles.topArea}>
                        <Text style={[styles.text, styles.valueText]}>R$ 50.000,00</Text>
                        <Text style={[styles.text, styles.dateText]}>30/09/2023</Text>
                    </View>
                
                    <View style={styles.bottomArea}>
                        <View style={styles.informations}>
                            <Text style={[styles.text, styles.baloon]}>100.2 km</Text>
                            <Text style={[styles.text, styles.baloon]}>Uber</Text>
                        </View>
                        <Text style={[styles.text, styles.descriptionText]}>Uma corrida muito doida, maluca, absurda de doida muito tensa</Text>
                    </View>
                    
                </View>
            </Pressable>

        </View>
       
    )
}

export default RideCard;
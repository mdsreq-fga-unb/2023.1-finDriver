import React from "react";
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const ExpenseCard = (props) => {
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
                            <Text style={[styles.text, styles.baloon]}>Almoço do dia</Text>
                            <Text style={[styles.text, styles.baloon]}>Comida</Text>
                        </View>
                        <Text style={[styles.text, styles.descriptionText]}>Era um restaurante muito bom da zona sul, comprei um macarrão e me acabei naquele molho branco</Text>
                    </View>
                    
                </View>
            </Pressable>

        </View>
       
    )
}

export default ExpenseCard;
import React from "react";
import { View, Text, Pressable, Animated, TouchableOpacity} from 'react-native';
import { Swipeable } from "react-native-gesture-handler";

import styles from './styles';

const ExpenseCard = (props, navigation) => {

        const onSwipeRight = () => { //Função executada ao apertar delete
        };
        const onSwipeLeft = () => { //Função executada ao apertar delete
            navigation.navigate('Editar Despesa')
        };
    

    const renderRightActions = () => (
        <TouchableOpacity onPress={onSwipeRight}>
          <View style={styles.deleteButtonArea}>
            <Text style={styles.deleteButtonText}>Deletar</Text>
          </View>
        </TouchableOpacity>
    );
    const renderLeftActions = () => (
        <TouchableOpacity onPress={onSwipeLeft}>
        <View style={styles.editButtonArea}>
            <Text style={styles.editButtonText}>Editar</Text>
        </View>
        </TouchableOpacity>
    );


    return(
         <Swipeable
         renderRightActions={renderRightActions}>
             <Pressable>
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
        </Swipeable>  
    )
}

export default ExpenseCard;
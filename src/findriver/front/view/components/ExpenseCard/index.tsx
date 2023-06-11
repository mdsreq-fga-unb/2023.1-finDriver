import React from "react";
import { View, Text, Pressable, Animated, TouchableOpacity} from 'react-native';
import { Swipeable } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from './styles';

const ExpenseCard = ({ expense }) => {
    const navigation = useNavigation();

        const onSwipeRight = () => { //Função executada ao apertar delete
        };
        
        const handleEditExpense = () => {
            navigation.navigate('Editar Despesa' as never);
        }
        
    const renderRightActions = () => (
        <TouchableOpacity onPressIn={onSwipeRight}>
          <View style={styles.deleteButtonArea}>
            <Text style={styles.deleteButtonText}>Deletar</Text>
          </View>
        </TouchableOpacity>
    );


    return(
         <Swipeable
         renderRightActions={renderRightActions}>
             
                <View style={styles.container}>
                    <Pressable onPress={() => handleEditExpense()}>
                    <View style={styles.topArea}>
                        <Text style={[styles.text, styles.valueText]}>R$ {expense?.value}</Text>
                        <Text style={[styles.text, styles.dateText]}>{expense?.ride}</Text>
                    </View>
                
                    <View style={styles.bottomArea}>
                       
                        <View style={styles.informations}>
                            <Text style={[styles.text, styles.baloon]}>{expense?.cause}</Text>
                            <Text style={[styles.text, styles.baloon]}>{expense?.type}</Text>
                        </View>
                       
                        <Text style={[styles.text, styles.descriptionText]}>{expense?.description}</Text>
                    </View>
                   </Pressable>   
                </View>
               
        </Swipeable>  
    )
}

export default ExpenseCard;
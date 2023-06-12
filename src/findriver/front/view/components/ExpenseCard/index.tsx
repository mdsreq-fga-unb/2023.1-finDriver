import React from "react";
import { View, Text, Pressable, Animated, TouchableOpacity, Alert} from 'react-native';
import { Swipeable } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import dados from "../../../dados";
import styles from './styles';

const ExpenseCard = ({ expense }) => {
    const navigation = useNavigation<any>();
    const id = expense?.id;

    const onClickSwipeRight = () => { 
        try{
            const requestOptions = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            };
            fetch(`${dados.Url}/api/expense/deletar/${id}`, requestOptions)
                .then((response) => response.json())
                .then(() => {
                    console.log("Despesa apagada com sucesso!");
                    Alert.alert("Despesa apagada com sucesso!");
                })
                .catch((err) => console.log(err)
            );
        } catch(error){
            console.log(error);
        }
    };

    const handleEditExpense = () => {
        navigation.navigate('Editar Despesa' as never, {id: id});
    }
        
    const renderRightActions = () => (
        <TouchableOpacity onPressIn={onClickSwipeRight}>
          <View style={styles.deleteButtonArea}>
            <Text style={styles.deleteButtonText}>Deletar</Text>
          </View>
        </TouchableOpacity>
    );


    return(
         <Swipeable
         renderRightActions={renderRightActions}>
             <Pressable onPress={() => handleEditExpense()}>
                <View style={styles.container}>
                    
                    <View style={styles.topArea}>
                        <Text style={[styles.text, styles.valueText]}>R$ {expense?.value}</Text>
                        <Text style={[styles.text, styles.dateText]}>{expense?.date}</Text>
                    </View>
                
                    <View style={styles.bottomArea}>
                       
                        <View style={styles.informations}>
                            <Text style={[styles.text, styles.baloon]}>{expense?.cause}</Text>
                            <Text style={[styles.text, styles.baloon]}>{expense?.type}</Text>
                        </View>
                       
                        <Text style={[styles.text, styles.descriptionText]}>{expense?.description}</Text>
                    </View>
                    
                </View>
            </Pressable>     
        </Swipeable>  
    )
}

export default ExpenseCard;
import React from "react";
import { View, Text, Pressable, TouchableOpacity} from 'react-native';
import { Swipeable } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


import styles from './styles';
import EditRide from "../../pages/EditRide";

const RideCard = () => {
    const navigation = useNavigation();

    const onSwipeRight = () => { //Função executada ao apertar delete
        console.log("tá apagado!")
        //navigation.navigate('Bem-vindo');
    };
    const onSwipeLeft = () => { //Função executada ao apertar delete
    };

    const handleEditRide = () => {
        navigation.navigate("Editar Corrida" as never);
    }

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
            renderRightActions={renderRightActions}
            renderLeftActions={renderLeftActions}>
            
            <View>
                <Pressable onPress={() => handleEditRide()}>
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

       </Swipeable>
    )
}

export default RideCard;
import React from "react";
import { View, Text, Pressable, TouchableOpacity} from 'react-native';
import { Swipeable } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from './styles';
import EditRide from "../../pages/EditRide";

const RideCard = ({ ride }) => {
    const navigation = useNavigation();

    const onSwipeRight = () => {
        console.log("tá apagado!")
        //navigation.navigate('Bem-vindo');
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

    return(
        <Swipeable
            renderRightActions={renderRightActions}>
            
            <View style={styles.container}>
                <Pressable onPress={() => handleEditRide()}>

                    <View style={styles.topArea}>
                        <Text style={[styles.text, styles.valueText]}>R$ {ride?.value}</Text>
                        <Text style={[styles.text, styles.dateText]}>{ride?.date}</Text>
                    </View>
                    
                        <View style={styles.bottomArea}>
                            
                            <View style={styles.informations}>
                                <Text style={[styles.text, styles.baloon]}>{ride?.kilometerage} km</Text>
                                <Text style={[styles.text, styles.baloon]}>{ride?.application}</Text>
                            </View>
                            
                            <Text style={[styles.text, styles.descriptionText]}>{ride?.description}</Text>
                        </View>
                </Pressable>
            </View>
       </Swipeable>
    )
}

export default RideCard;
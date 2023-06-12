import React, { useEffect } from "react";
import { View, Text, Pressable, TouchableOpacity, Alert} from 'react-native';
import { Swipeable } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import dados from "../../../dados";
import styles from './styles';
import EditRide from "../../pages/EditRide";

const RideCard = ({ ride }) => {

    const navigation = useNavigation<any>();

    const id = ride?.id;

    const onClickSwipeRight = () => {
        try{
            const requestOptions = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            };
            fetch(`${dados.Url}/api/ride/deletar/${id}`, requestOptions)
                .then((response) => response.json())
                .then(() => {
                    console.log("Apagado com sucesso!");
                    Alert.alert("Corrida apagada com sucesso!");
                })
                .catch((err) => console.log(err)
            );
        } catch(error) {
            console.log(error);
        }
    };


    const handleEditRide = () => {
        navigation.navigate("Editar Corrida" as never, {id: id});
    }

    const renderRightActions = () => (
        <TouchableOpacity onPress={onClickSwipeRight}>
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
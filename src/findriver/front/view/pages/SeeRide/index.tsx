import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Alert, Pressable, TextInput, KeyboardAvoidingView } from 'react-native';
import Picker from '@ouroboros/react-native-picker';

import styles from './styles';

const SeeRides = ({ route, navigation }) => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Minhas Corridas</Text>
            </View>

            <View>
                {/* chamar cards aqui */}
            </View>
        </View>
    );
}

export default SeeRides;
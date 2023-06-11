import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Header = () => {

    return(
        <View style={styles.logoContainer}>
            <Image source={require('../../assets/logoVerdeEscuro.png')} style={styles.logo} />
        </View>
    );
}

export default Header;
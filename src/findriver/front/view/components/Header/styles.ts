import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    logoContainer: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 60,
        zIndex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#F5F5F7',
        elevation: 5
    },
    logo: {
        width: 225,
        height: 33,
        marginTop: 12
    }
});

export default styles;
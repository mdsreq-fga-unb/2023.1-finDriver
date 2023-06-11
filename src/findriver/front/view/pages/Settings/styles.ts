import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#79ae92',
        width: '100%',
        height: '100%',
        flexDirection: 'column'
    },
    logo: {
        width: 300,
        height: 45,
        marginTop: 160
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#F5F5F7',
        marginVertical: 50
    },
    buttonArea: {
        alignItems: 'center',
        width: '100%'
    },
    button: {
        width: '70%',
        backgroundColor: '#1c5560',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        paddingVertical: 10,
        elevation: 10
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },

});

export default styles;
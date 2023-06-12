import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: -110,
        width: 250,
        height: 250,
    },
    title: {
        color: '#1c5560',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: -25
    },
    text: {
        fontSize: 23,
        textAlign: 'left',
        color: '#001F36',
    },
    label: {
        color: '#1c5560',
        textAlign: 'left',
        fontSize: 13,
        marginTop: 25
    },
    button: {
        backgroundColor: '#001f36',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        paddingVertical: 10,
        paddingHorizontal: 120,
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },

});

export default styles;
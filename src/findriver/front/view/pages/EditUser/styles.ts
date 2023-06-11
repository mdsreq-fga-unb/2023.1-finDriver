import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection:"column",
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: 20,
        width: 250,
        height: 250,
    },
    componentsContainer:{
    },
    title:{
        color: '#001F36',
        fontWeight: '500',
        fontSize: 25,
        marginTop: -20,
        marginBottom: 20,
    },
    nameEmailContainer: {
        marginBottom: 30,

    },
    passwordContainer: {
        marginBottom: 25,
    },
    label: {
        color: '#1c5560',
        textAlign: 'left',
        justifyContent: 'center',
        fontSize: 13,
    },
    input: {
        width: 290,
        height: 50,
        padding: 10,
        borderColor: '#e0e0e0',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 15,
    },
    button: {
        backgroundColor: '#001f36',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    link: {
        alignSelf: 'flex-end',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#001f36',
        textDecorationLine: 'underline',
        textDecorationColor: '#001f36',
    },
});

export default styles;

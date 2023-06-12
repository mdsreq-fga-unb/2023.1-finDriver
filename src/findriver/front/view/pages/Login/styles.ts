import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: -10,
        width: 300,
        height: 300,
    },
    label: {
        color: '#1c5560',
        textAlign: 'left',
        fontSize: 13,
    },
    input: {
        width: 290,
        height: 50,
        padding: 10,
        borderColor: '#e0e0e0',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 20,
        fontSize: 15,
    },
    button: {
        backgroundColor: '#001f36',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 120,
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    underlinedText: {
        fontSize: 18,
        color: '#1C5560',
        marginTop: 0,
        textDecorationLine: 'underline',
        textDecorationColor: '#1C5560',
    },
    signUp: {
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
    },
    pressableTextSignUp: {
        maxWidth: 100,
        maxHeight: 100,
        alignSelf: 'flex-end',
        marginTop: 20,
    },
    pressableTextForgotPassword: {
        marginVertical: 10,
        maxWidth: 120,
        alignItems: 'center'
    }
});

export default styles;

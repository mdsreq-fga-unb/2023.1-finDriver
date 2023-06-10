import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginTop: -20,
        marginBottom: 0,
        width: 250,
        height: 250,
    },
    text: {
        fontSize: 15,
        color: '#696969',
        textAlign: 'justify',
        marginHorizontal: 40,
        marginBottom: 35,
    },
    componentsContainer: {
    },
    questionOneContainer: {
        marginBottom: 15,
    },
    questionTwoContainer: {
        marginBottom: 25,
    },
    label: {
        color: '#1c5560',
        textAlign: 'left',
        justifyContent: 'center',
        fontSize: 13,
    },
    picker: {
        borderColor: '#e0e0e0',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 5,
        padding: 7,
    },
    input: {
        width: 290,
        height: 50,
        padding: 7,
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

});

export default styles;
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5F5F7',
        alignItems: 'center'
    },
    logo: {
        width: 350,
        height: 350,
        
    },
    componentsContainer: {
        flexDirection: 'column',
        width: '100%',
        paddingHorizontal: '15%',
        marginTop: '-8%'
    },
    topContainer: {
        width: '100%',
        marginBottom: '8%',

    },
    bottomContainer: {
        width: '100%',
    },
    pressableContainer: {
        width: '100%'
    },
    label: {
        color: '#1c5560',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 13,
        paddingLeft: 5,
    },
    input: {
        height: 48,
        width: '95%',
        borderWidth: 1.5,
        borderColor: '#e0e0e0',
        borderRadius: 10,
        marginBottom: 7,
        padding: 8,
    },
    text: {
        color: 'gray',
        width: '95%',
        marginBottom: 20,
        paddingHorizontal: 5,
        textAlign: 'justify'
    },
    button: {
        height: 50,
        width: '95%',
        backgroundColor: '#001F36',
        borderRadius: 10,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color:"#F5F5F7",
        fontSize: 18,
        fontWeight: 'bold'
    },
    pressableTextGoToLogin: {
        alignSelf: 'flex-end',
        marginTop: 10,
    },
    link: {
        textDecorationLine: 'underline',
        textDecorationColor: '#1c5560',
        fontSize: 15,
        color: '#1c5560',   
        marginRight: '5%'
    }
});

export default styles;
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width:400,
        height: 400,
        marginTop: 0,
        marginBottom: 50,
    },
    button: {
        backgroundColor: '#001f36',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        width: 250,
        height: 55,
        margin:10,
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },

})

export default styles;
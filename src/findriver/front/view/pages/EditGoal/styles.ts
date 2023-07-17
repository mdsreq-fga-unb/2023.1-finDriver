import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#f5f5f7',
        width: '100%',
        height: '100%',
    },
    container: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    titleArea:{
        marginTop: '20%',
        marginBottom: '5%',
        width: '70%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#386F71',
    },
    textArea: {
        width: '70%',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    label: {
        color: '#87b0b7',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 15
    },    
    textInput: {
        fontSize: 18,
        color: '#1c5560',
        marginLeft: 20,
        backgroundColor: '#f5f5f7',
        borderColor: "#87b0b7",
        borderWidth: 1.5,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginTop: 6
    },
    buttonArea: {
        marginTop: '3%',
        alignItems: 'center',
        width: '100%'
    },
    button: {
        width: '70%',
        backgroundColor: '#386F71',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        elevation: 10,
        marginBottom: 20
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f5f5f7',
    },
});

export default styles;


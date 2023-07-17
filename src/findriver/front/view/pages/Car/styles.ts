import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#1c5560',
        width: '100%',
        height: '100%',
    },
    container: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    titleArea:{
        marginTop: '27%',
        marginBottom: '10%',
        width: '70%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#F5F5F7',
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
        // marginTop: 15
    },    
    text: {
        fontSize: 18,
        color: '#f5f5f7',
        marginLeft: 20,
        marginBottom: 10,

    },
    textInput: {
        fontSize: 18,
        color: '#1c5560',
        marginLeft: 20,
        backgroundColor: '#f5f5f7',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginTop: 6
    },
    buttonArea: {
        alignItems: 'center',
        width: '100%'
    },
    button: {
        width: '70%',
        backgroundColor: '#F5F5F7',
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
        color: '#1c5560',
    },
});

export default styles;


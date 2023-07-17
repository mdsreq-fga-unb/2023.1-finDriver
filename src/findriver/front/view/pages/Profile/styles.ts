import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    body: {
        backgroundColor: '#f5f5f7'

    },
    container: {
        paddingTop: 50,
        // justifyContent: 'center',
        alignItems: 'center',
        height: 812
    },
    // logo: {
    //     marginTop: 0,
    //     width: 250,
    //     height: 250,
    // },
    title: {
        color: '#1c5560',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 80
    },
    textArea: {
        marginVertical: 50,
        width: 300,
    },
    label: {
        marginTop: 20,
        color: '#87b0b7',
        fontWeight: 'bold',
        fontSize: 15,
    },
    text: {
        fontSize: 20,
        textAlign: 'left',
        color: '#001F36',
        marginLeft: 20,

    },
    buttonArea: {
        position: 'absolute',
        bottom: 100,
    },
    button: {
        width: 300,
        backgroundColor: '#1c5560',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        paddingVertical: 10,
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modalContent: {
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        width: 300,
        textAlign: 'justify',
        color: "#1d1d1f",
        fontSize: 16,
    },
    modalTextInput: {
        width: 250,
        fontSize: 16,
        borderRadius: 10,
        color: '#1d1d1f',
        marginBottom: 15,
        marginTop: 5,
        backgroundColor: '#f5f5f7',
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    modalButtonArea: {
        flexDirection: 'row',
        marginTop: 20
    },
    modalButton: {
        borderRadius: 10,
        width: 130,
        marginHorizontal: 20,
        backgroundColor: '#1c5560',
        padding: 7,
    },
    modalButtonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }

});

export default styles;
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: '#79ae92',
        height: '100%'
    },
    line: {
        borderBottomColor: '#F5F5F7',
        borderBottomWidth: 2
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 50,
        marginLeft: 15,
        fontSize: 30,
    },
    addRideButton: {
        backgroundColor: '#F5F5F7',
        paddingVertical: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        marginVertical: 20,
        elevation: 10
    },
    addRideText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1c5560'
    }
});

export default styles;

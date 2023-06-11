import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: '#79ae92',
        height: '100%',
    },
    line: {
        borderBottomColor: '#F5F5F7',
        borderBottomWidth: 2,
        marginHorizontal: 10
    },
    title: {
        color: '#F5F5F7',
        marginTop: 20,
        fontSize: 28,
        fontWeight: '500',
        marginHorizontal: 10
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
        fontSize: 18,
        fontWeight: '500',
        color: '#1c5560'
    },
    noRidesText: {
        marginHorizontal: 12,
        color: '#F5F5F7',
        fontSize: 17,
        fontWeight: '400'
    }
});

export default styles;

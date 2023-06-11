import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: '#F5F5F7'
    },
    profitContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1C5560',
        padding: 10,
        marginHorizontal: 25,
        marginTop: 35,
        borderRadius: 50,

    },
    weeklyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
        marginHorizontal: 25,
        padding: 15,
    },
    earnExpenseContainer: {
        backgroundColor: '#1C5560',
        alignContent: 'space-between',
        width: 150,
        height: 75,
        borderRadius: 5,
    },
    white: {
        color: 'white',
        padding: 3,
        marginHorizontal: 10,
        },
    value: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    kmText: {
        fontSize: 20,
        fontFamily: '',
        fontWeight: '500',
        color: '#001F36',
    },
    kmContainer:{
        alignSelf: 'center',
        marginTop: 25
    },
    rideExpenseContainer: {
        backgroundColor: '#1C5560',
        marginHorizontal: 25,
        borderRadius: 10,
        marginBottom: 10,

    },
    footer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: 50,
        backgroundColor: '#1C5560',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default styles;
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 0,
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
        marginTop: 80,
        marginBottom: 20,
        borderRadius: 10,
        elevation: 7
    },
    profitText: {
        color: 'white',
        fontSize: 15,
        marginHorizontal: 10,
    },
    summaryContainer: {
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#1c5560',
        marginHorizontal: 10
    },
    goalCard: {
        marginHorizontal: 25,
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#386F71',
        borderRadius: 10,
        elevation: 10
    },
    goalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 15,
    },
    summaryCard: {
        marginHorizontal: 25,
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#79ae92',
        borderRadius: 10,
        elevation: 10
    },
    summaryTextTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#F5F5F7',
        marginBottom: 3
    },
    summaryText: {
        color: '#F5F5F7'
    },
    kmContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1C5560',
        padding: 10,
        marginHorizontal: 25,
        marginTop: 20,
        marginBottom: 5,
        borderRadius: 10,
        elevation: 7
    },
    kmText: {
        color: '#F5F5F7',
        fontSize: 15,
        fontWeight: '400'

    },
    rideExpenseContainer: {
        marginHorizontal: 15,
        marginVertical: 5,
        backgroundColor: 'transparent'
    }
});

export default styles;
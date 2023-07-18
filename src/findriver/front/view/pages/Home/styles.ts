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
        marginBottom: 10,
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
    toolsContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 25,
    },
    toolCard: {
        width: '47%',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: "center",
        marginVertical: 5,
        paddingHorizontal: 8,
        paddingVertical: 10,
        backgroundColor: '#5E8C7C',
        borderRadius: 10,
        elevation: 10
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
        marginBottom: 10,
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
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: 370,

    },
    modalText: {
        // width: 280,
        textAlign: 'justify',
        color: "#1d1d1f",
        fontSize: 16,
    },
    modalTextInput: {
        width: 180,
        fontSize: 16,
        borderRadius: 10,
        color: '#1d1d1f',
        marginBottom: 15,
        marginTop: 5,
        marginLeft: 15,
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
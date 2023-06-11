import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: "space-between",
        marginVertical: 8,
        padding: 10,
        marginHorizontal: 10,
        elevation: 7
    },
    topArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: '#1c5560',
        alignSelf: "flex-start", 
    },
    valueText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    bottomArea: {
        alignContent: 'flex-start',
        paddingVertical: 2,
        paddingHorizontal: 5
    },
    informations: {
        flexDirection: 'row',
        paddingVertical: 6,
    },
    baloon: {
        marginLeft: 10,
        backgroundColor: '#79ae92',
        borderRadius: 20,
        paddingHorizontal: 6,
        color: '#1D1D1F'
    },
    descriptionText: {
        marginLeft: 10,
        borderRadius: 5
    },
    dateText: {
        
    },
    deleteButtonArea:{
        padding: 10, 
        elevation: 10,
        width: '100%',
        height: '90%',
        marginRight: 10,
        borderRadius: 10,
        marginVertical: 8,
        backgroundColor: 'red', 
        justifyContent: "center",
        alignSelf: 'flex-end'
    },
    deleteButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});

export default styles;
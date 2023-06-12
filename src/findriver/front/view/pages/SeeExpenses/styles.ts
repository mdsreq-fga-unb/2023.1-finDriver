import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: '#1c5560',
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
    addExpenseButton: {
        backgroundColor: '#F5F5F7',
        paddingVertical: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        marginVertical: 20,
        elevation: 10
    },
    addExpenseText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#1c5560'
    },
    noExpensesText: {
        marginHorizontal: 12,
        color: '#F5F5F7',
        fontSize: 17,
        fontWeight: '400'
    }
});

export default styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#001F36',
        paddingHorizontal: 30,
        paddingVertical: 0
    },
    clicableArea: {
        padding: 10,
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    text: {
        color: 'rgba(245, 245, 247, 0.9)',
        marginTop: 3,
        fontWeight: 'bold',
        fontSize: 12
    },
    button: {
        padding: 0,
        backgroundColor: '#001F36',
        marginRight: -10,
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center'
    }
});

export default styles;
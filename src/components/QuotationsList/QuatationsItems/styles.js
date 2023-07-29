import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainItems: {
        width: '95%',
        flexDirection: 'row',
        height: 'auto',
        alignItems: 'center',
        backgroundColor: '#333333',
        margin: '3%',
        borderRadius: 10,
        padding: 10,
    },
    boxLogo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentItemsLeft: {
        width: '36%',
        height: '100%',
        alignItems: 'flex-start',
    },
    contentItemsRight: {
        width: '60%',
        alignItems: 'flex-end',
    },
    logoImg: {
        width: 40,
        height: 40,
        marginLeft: 2,
    },
    dayCotation: {
        color: 'white',
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        color: '#ff0000',
        fontSize: 20,
        fontWeight: 'bold',
    }
})
export default styles;
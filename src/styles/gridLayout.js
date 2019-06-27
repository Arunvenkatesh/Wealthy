
import { StyleSheet } from "react-native";

export const gridLayoutStyles = StyleSheet.create({
    gridViewContainer: {
        backgroundColor: '#202020',
        flexWrap: "wrap-reverse",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 60,
        margin: 1,
    },
    gridViewTextLayout: {
        fontSize: 18,
        fontWeight: '600',
        justifyContent: 'center',
        color: '#fff',
        padding: 10,
    }
});

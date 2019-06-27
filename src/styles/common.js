import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#151515"
    },
    flexContainer: {
        flexGrow: 1,
        paddingHorizontal: 3
    },
    formGroup: {
        backgroundColor: "#101010",
        marginHorizontal: 10,
        height: "100%",
        marginTop: 100,
        alignSelf: "center",
        width: "90%",
        paddingHorizontal: 10,
        paddingTop: 20
    },
    inputBoxTitle: {
        color: "#FFFFFF",
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 10
    },
    commonTextLayout: {
        fontSize: 18,
        fontWeight: '600',
        justifyContent: 'center',
        color: '#fff',
        padding: 10,
    }
});

import React from 'react';
import { View, StatusBar, Platform, StyleSheet } from 'react-native';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const CustomStatusBar = ({ backgroundColor, ...props }) => (
    <View style={styles.statusBar}>
        <StatusBar translucent backgroundColor={"#151515"} {...props} />
    </View>
);
export default CustomStatusBar;
const styles = StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT,
        backgroundColor: "#101010"
    }
});
import React from "react";
import {View, StyleSheet,ViewPropTypes} from "react-native";
import StyledText from "./styles/StyledText";
import Constants from "expo-constants";
import theme from "./theme";

const styles = StyleSheet.create({
    container: {
        background:
        paddingTop:
    }
})

const AppBar = () => {
    return(
    <View style={styles.appBar}>
        <StyledText fontWeight="bold" style={styles.text}>
            Pasteles
        </StyledText>
    </View>
    )
}

export default AppBar;
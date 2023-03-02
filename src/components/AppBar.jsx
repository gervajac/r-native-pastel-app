import React from "react";
import {View, StyleSheet} from "react-native";
import StyledText from "./styles/StyledText";
import Constants from "expo-constants";
import theme from "./theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    container: {
        background: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
    },
    text: {
        color: theme.appBar.textPrimary,
        paddingHorizontal: 10
    },
    appBar: {
        flexDirection: "row",
    }
})

const AppBarTab = ({active, children, to}) => {
    return (
        <Link to={to}>
            <StyledText fontWeight="bold" padding={10} style={styles.text}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    return(
    <View style={styles.appBar}>
        <AppBarTab active to="/">Pasteles</AppBarTab>
        <AppBarTab active to="/signin">Sign In</AppBarTab>
    </View>
    )
}

export default AppBar;
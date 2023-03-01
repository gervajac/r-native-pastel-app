import React from "react";
import { StyleSheet, Text } from "react-native";
import theme from "../theme.js"

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeight.normal
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold:{  
        fontWeight: theme.fontWeight.bold
    },
    subHeading:{
        fontSize: theme.fontSizes.subheading
    },
    textAlignCenter:{
        textAlign: "center"
    }
})

export default function StyledText ({align, children, color, fontSize, fontWeight, style, ...restOfProps}) {
    const textStyles = [
        styles.text,
        align === "center" && styles.textAlignCenter,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        fontSize === "subheading" && styles.subHeading,
        fontWeight === "bold" && styles.bold
    ]

    return (
        <Text style={textStyles} {... restOfProps}>
            {children}
        </Text>
    )

}


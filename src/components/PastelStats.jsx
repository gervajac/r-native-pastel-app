import React from "react";
import {View} from "react-native";
import StyledText from "./styles/StyledText";



const PastelStats = props => {
    return (
        <View style={{flexDirection: "row", justifyContent: "space-around"}}>
            <View>
                <StyledText align="center" fontWeight="bold">CM {props.longitud}</StyledText>
                <StyledText>${props.price}</StyledText> 
            </View>
        </View>
    )
}

export default PastelStats;
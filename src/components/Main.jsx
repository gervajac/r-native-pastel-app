import React from "react";
import {Text, View} from "react-native";
import Constants from "expo-constants";
import PastelSection from "./PastelSection";


const Main = () => {
    return(
            <View style={{marginTop: Constants.statusBarHeight}}>
                <Text>
                   Pastel Aplication of Pastelery
                </Text>
                <PastelSection/>
            </View>       
    )
}

export default Main;
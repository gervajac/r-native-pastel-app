import React from "react";
import {Image, View, Text, StyleSheet} from "react-native";
import StyledText from "./styles/StyledText";
import PastelStats from "./PastelStats";


const PastelItemHeader = (props) => (
    <View>
    <Image style={style.image} source={{uri: props.image }}></Image>
    <StyledText fontSize="subheading" fontWeight="bold">{props.name}</StyledText>
    <StyledText>{props.description}</StyledText>
    </View>
)

const Pastel = (props) => (
    <View key={props.id} style={style.container}>
        <PastelItemHeader {... props} />
        <PastelStats {... props}/>
    </View>
)


const style = StyleSheet.create({
    container: {
        padding: 20, 
        paddingBottom:5, 
        paddigTop:5 
    },
    image: {
        minHeight: 350,
        maxWidth: "100%", 
        margin: "auto",
        borderRadius: 30
    }
})

export default Pastel;
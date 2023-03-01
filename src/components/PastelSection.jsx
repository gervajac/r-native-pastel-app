import React from "react";
import {Text, FlatList} from "react-native";
import pasteles from "./data/pastel";
import Pastel from "./Pastel";

const PastelSection = () => {
    return(
        <FlatList 
        data={pasteles}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({item: pastel}) =>(
        <Pastel { ... pastel}/>
    )}
    />
    )
}

export default PastelSection;

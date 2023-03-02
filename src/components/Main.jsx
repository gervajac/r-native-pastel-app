import React from "react";
import {Text, View} from "react-native";
import Constants from "expo-constants";
import PastelSection from "./PastelSection";
import AppBar from "./AppBar";
import { Routes, Route, Navigate } from "react-router-native";
import SignIn from "./SignIn";


const Main = () => {
    return(
            <View style={{marginTop: Constants.statusBarHeight}}>
            <View style={{margin: 10}}>
                <AppBar/>
            </View>
                <Routes>
                        <Route exact path='/' element={<PastelSection/>}/>
                        <Route exact path="/signin" element={<SignIn/>}/>
                </Routes>
            </View>       
    )
}

export default Main;
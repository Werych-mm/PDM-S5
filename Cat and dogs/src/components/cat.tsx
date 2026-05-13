import React from "react";
import {View, Text, TextInput} from 'react-native';

const getfullname = (primeironome: String, segundonome: String, terceironome: String) => {
    return primeironome + " " + segundonome + " " + terceironome
}

const Cat = (props: String) => {
    return(
        <View>
            <Text> Olá eu sou {props.name}</Text>
        </View>
    );
}

export default Cat;
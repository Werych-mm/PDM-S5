import React from "react";
import {useState} from 'react'
import {View, Text, Button} from 'react-native';

const Cat = (props: {name: String, idade: Number}) => {
    const [isHungry, setIsHungry] = useState(true);
    return(
        <View>
            <View>
                <Text> Olá eu sou {props.name} e tenho {props.idade} anos</Text>
            </View>

        <Button onPress={() => { setIsHungry(false); }} 
        disabled={!isHungry} title={isHungry ? "Quero comida" : "UwU"}></Button>
        </View>
    );
}

export default Cat;
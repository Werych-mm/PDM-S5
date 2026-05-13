import React from 'react';
import {View, Text, TextInput} from 'react-native';

// const getfullnamec = {primeironome: String, segundonome: String, terceironome: String} => {
//     return primeronome + " " + segundonome + " " + terceironome 
// }

const Dog = (props: String) => {
    return(
        <View>
            <Text>Olá eu sou o cachorro {props.name}</Text>
        </View>
    );
}

export default Dog;


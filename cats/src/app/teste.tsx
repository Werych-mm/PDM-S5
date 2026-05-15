import Cat from '@/components/cat';
import React from 'react'
import { ScrollView, Text, Button} from 'react-native'
import {useRouter} from 'expo-router'


const App = () => {

    const router = useRouter();
    function goCadastro() {
        router.push('/cadastro');
    }

    return(
        <ScrollView style={{flex:1, backgroundColor:"#e8dcba", alignContent:'center'}}>
            <Text style={{fontSize:24}}>Apresentação de gatos:</Text>
            <Cat name="Pequeno" idade={5}></Cat>
            <Button title="ir para adoção" onPress={goCadastro}></Button>
        </ScrollView>
    )
}

export default App
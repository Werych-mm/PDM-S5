import Cat from '@/components/cat';
import Dog from '@/components/dog';
import React from 'react'
import { ScrollView, Text} from 'react-native'


const App = () => {

    return(
        <ScrollView style={{flex:1, backgroundColor:"#e8dcba", alignContent:'center'}}>
            <Text style={{fontSize:24}}>Apresentação de gatos:</Text>
            <Cat name="Garfield"></Cat>
            <Cat name="Adrien"></Cat>
            <Cat name="Woman"></Cat>

            <Text style={{fontSize:24, marginTop:20}}>Apresentação dos cachorros</Text>
            <Dog name="Skye"></Dog>
            <Dog name="Pandora"></Dog>
            <Dog name="Caramelo"></Dog>
        </ScrollView>
    )
}

export default App
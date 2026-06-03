import { View, ActivityIndicator, Text } from 'react-native';
import ClienteService from '../modules/clienteservice';
import {initializeDatabase } from '../database/database';
import {useEffect, useState } from 'react';

export default function App () {
    const [dbinicialized, setDBinicialized] = useState(false);
    useEffect(() => {
        try{
            setDBinicialized(true);
        }catch(error){
            console.error('Erro ao inicializar o banco de dados: ', error)
        }
    }, []);

    if(!dbinicialized){
        return (
            <View>
                <ActivityIndicator/>
                <Text>Inicializando banco de dados...</Text>
            </View>
        );
    }
    return (
        <View>
            <ClienteService/>
        </View>
    );
}
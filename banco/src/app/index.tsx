import {View, ActivityIndicator, Text} from 'react-native';
import CadstroAluno from '../modules/alunos/cadastroAluno';
import { initializeDatabase } from '../database/databse';
import { useEffect, useState } from 'react';


export default function App() {
    const [dbInitialized, setDbInitialized] = useState(false);
    useEffect(() => {
        try {
            // initializeDatabase();
            setDbInitialized(true);
        } catch(error) {
            console.error("Erro ao inicializar o banco de dados:", error)
        }
    }, []);

    if(!dbInitialized) {
        return (
        <View>
            <ActivityIndicator size="large" color="#0f659e"/>
            <Text>Incilizando banco de dados...</Text>
        </View>
        )
    }

    return (
        <View>
            <CadstroAluno />
        </View>
    )
}
import {View, Text, TextInput, TouchableOpacity } from 'react-native';
import {styles} from '../alunos/style'
import { Alunoservice } from './alunoservice';
import { useState } from 'react';

export default function CadstroAluno() {

    const [nome, setNome] = useState('');
    const [cgu, setcgu] = useState('');

    const handleSalvar = () => {
        // Logica pra salvar o aluno usando AlunoService, inserir*binem cgy)
    }
    try {
        Alunoservice.inserir(nome, cgu);
        setNome('');
        setcgu('');
    } catch(error) {
        console.error("Erro ao salvar aluno");
    }

    return(
        <View>
            <Text style={styles.container}>Cadastro de Aluno</Text>

            <TextInput 
            style={styles.input}
            placeholder='nome do Aluno'
            value='nome'
            onChangeText={setNome}
            />

            <TextInput 
            style={styles.input} 
            placeholder="cgu do Aluno"
            value={cgu}
            onChangeText={setcgu}
            />
            
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

        </View>
    )
}
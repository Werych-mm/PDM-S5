import {View, Text, TextInput, TouchableOpacity } from 'react-native';
import {styles} from '../alunos/style'

export default function CadstroAluno() {
    return(
        <View>
            <Text style={styles.container}>Cadastro de Aluno</Text>

            <TextInput style={styles.input} placeholder="Nome do aluno"></TextInput>
            <TextInput style={styles.input} placeholder="Nome do aluno"></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

        </View>
    )
}
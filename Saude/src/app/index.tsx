import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Cadastro() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.titulo}>+Saúde</Text>
                    <Image source={require("@/app/assets/logo.png")} style={styles.logo}/>
            </View>

            <View style={styles.card}>

                <Text style={styles.nome}>Nome:</Text>
                <TextInput style={styles.inome}/>

                <Text style={styles.email}>Email:</Text>
                <TextInput style={styles.iemail}/>

                <Text style={styles.CPF}>CPF:</Text>
                <TextInput style={styles.iCPF}/>

                <Text style={styles.Senha}>Senha:</Text>
                <TextInput style={styles.Senha}/>

                <Text style={styles.ConSenha}>Confirmar Senha:</Text>
                <TextInput style={styles.ConSenha}/>

                <Text style={styles.Data}>Data de Nascimento:</Text>
                <TextInput placeholder='dd/mm/aaaa' style={styles.iData}/>

                <TouchableOpacity style={styles.botao}>
                    <Text styles={styles.cadastrar}>Cadastrar</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8EBCCD",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%" 
    },

    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        border: "1px solid black",
    },

    titulo: {
        color: "#FFF",
        fontSize: "75px",
        fontWeight: "Bold",
        height: "100%"
    }

})
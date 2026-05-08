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
                <TextInput style={styles.iSenha}/>

                <Text style={styles.ConSenha}>Confirmar Senha:</Text>
                <TextInput style={styles.iConSenha}/>

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
        marginBottom: "2%"
    },

    titulo: {
        color: "#FFF",
        fontSize: "75px",
        fontWeight: "Bold",
    },

    logo: {
        width: "30%",
        height: "75%"
    },

    card: {
        backgroundColor: "#FFF",
        width: "55%",
        height: "60%",
        borderRadius: "10px"
    },

    nome: {
        color: "#656565",
        marginTop: "25px",
        marginLeft: "10px"
    },

    inome: {
        border: "1px solid #656565",
        borderRadius: "5px",
        marginLeft: "10px",
        padding: "8px",
        width: "90%"
    },

    email: {
        color: "#656565",
        marginTop: "10px",
        marginLeft: "10px"
    },

    iemail: {
        border: "1px solid #656565",
        borderRadius: "5px",
        marginLeft: "10px",
        padding: "8px",
        width: "90%"
    },

    CPF: {
        color: "#656565",
        marginTop: "10px",
        marginLeft: "10px"
    },

    iCPF: {
        border: "1px solid #656565",
        borderRadius: "5px",
        marginLeft: "10px",
        padding: "8px",
        width: "90%"
    },

    Senha: {
        color: "#656565",
        marginTop: "10px",
        marginLeft: "10px"
    },

    iSenha: {
        border: "1px solid #656565",
        borderRadius: "5px",
        marginLeft: "10px",
        padding: "8px",
        width: "90%"
    },

    ConSenha: {
        color: "#656565",
        marginTop: "10px",
        marginLeft: "10px"
    },

    iConSenha: {
        border: "1px solid #656565",
        borderRadius: "5px",
        marginLeft: "10px",
        padding: "8px",
        width: "90%"
    },

    Data: {
        color: "#656565",
        marginTop: "10px",
        marginLeft: "10px"
    },

    iData: {
        border: "1px solid #656565",
        borderRadius: "5px",
        marginLeft: "10px",
        padding: "8px",
        width: "90%"
    },

    botao: {
        backgroundColor: ""
    }




})
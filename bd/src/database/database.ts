import * as SQlite from 'expo-sqlite';

export const db = await SQlite.openDatabaseAsync('clientes.db');

export const initializeDatabase = () => {
    try {
        db?.execSync(
            `CREATE TABLE IF NOT EXISTS Clientes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            senha TEXT NOT NULL,
            cpf TEXT NOT NULL UNIQUE,
            dataNasc TEXT);
            `);
    } catch(error) {
        console.error('Erro ao criar a tabela clientes')
    }

    try {
        db?.execSync(
            `CREATE TABLE IF NOT EXISTS posts(
            id INTEGER PRIMARY KEY AUTOINCREMENT
            usuarioid INTEGER,
            titulo TEXT NOT NULL,
            conteudo TEXT NOT NULL,
            datapost TEXT,
            FOREIGN KEY(usuarioId) REFERENCES usuarios(id));
            `)
    } catch(error) {
        console.error('Erro ao criar a tabela posts')
    }
};
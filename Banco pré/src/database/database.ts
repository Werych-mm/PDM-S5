import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseAsync('Clientes.db');

export const initializeDatabase = () => {
    try{

        db?.execSync(
            `CREATE TABLE IF NOT EXISTS Clientes (
            id INTENGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            cpf TEXT NOT NULL UNIQUE);
            `);
    }catch(error){
        console.error('Erro ao criar a tabela de clentes')
    }
};
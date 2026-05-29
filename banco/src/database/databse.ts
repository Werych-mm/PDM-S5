import * as SQlite from 'expo-sqlite';

export const db = SQlite.openDatabaseAsync('alunos.db');

export const initializeDatabase = () => {
    try {
        db?.execSync(
            `CREATE TABLE IF NOT EXISTS alunos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT null,
            cgu TEXT NOT NULL UNIQUE);
            `);

    } catch(error) {
        console.error('erro ao criar tabela de aluno')
    }
}
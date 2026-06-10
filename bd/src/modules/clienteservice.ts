import {db} from '../database/database';
import {Cliente} from './type'

export const ClienteService = {
    inserir(nome: string, cpf: number, Datanasc: string) : void {
        if(!db) return;
            db.runAsync('INSERT into clientes (nome, cpf, data) VALUES (?, ?, ?);', [nome, cpf, Datanasc]);
    },
    buscarTodos(): Cliente[] {
        if(!db) return [];
            return db.getAllSync('SELECT * from cliente;')
    },
    atualizar(id: number, nome: string, cpf: number): void{
        if(!db) return;
            db.runAsync('UPDATE clientes SET nome = ?, cpf = ? WHERE id = ?', [nome, cpf, id]);
    },
    deletar(id: number) : void {
        if(!db) return;
            db.runAsync('DELETE FROM clientes WHERE id = ?;', [id]);
    }
}
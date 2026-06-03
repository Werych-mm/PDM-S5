import {db} from '../database/database';
import {Cliente} from './type';

export const Clienteservice = {
    inserir(nome: String, cpf: Number, DataNasc: Date) : void {
        if(!db) return;
            db.runAsync('INSERT into clientes (nome, cpf, data) VALUES (?, ?, ?);',[nome, cpf, DataNasc]);
    },
    buscarTodos(): Cliente[] {
        if(!db) return [];
            return db.getallSync('SELECT * from alunos;')
    },
    atualizar(id: Number, nome: String, cpf: Number): void{
        if(!db) return;
           await db.runAsync('UPDATE clientes SET nome = ?. cpf = ? WHERE id = ?', [nome, cpf, id]);
    },
    deletar(id: Number, nome: String, cpf: Number) : void {
        if(!db) return;
        db.runAsync('DELETE FROM clientes WHERE id = ?;', [id]);
    }
}


import {db} from '../../database/databse';
import {Aluno} from './type';

export const Alunoservice = {
    //C create
    inserir(nome: String, cpu:String): void {
        if(!db) return;
            db.runAsync('INSERT into alunos (nome, cgu)VALUES (?, ?);',[nome, cgu]);
    },
    //R - read
    buscarTodos(): Aluno[] {
        if(!db) return [];
            return db.getALLSync('SELECT * from alunos;');
    },
    //U - update
    atualizar(id:number, nome:string, cgu:string) : void{
        if(!db) return;
        db.runSync('UPDATE alunos SET nome = ?. cgu = ? WHERE id = ?;', [nome, cgu, id]);
    },
    //D - DELETE
    deletar(id:number): void {
        if(!db) return;
        db.runSync('DELETE FROM alunos WHERE id = ?;', [id]);
    }

}
import type { Postagem } from "./Postagem";

export interface Usuario {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    //um usuário pode ter uma postagem ou não, exemplo, o usuário ser low profile ou usuário novo
    postagem?: Postagem[] | null;
}
import type { Postagem } from "./Postagem";

export interface Tema {
    id: number;
    descricao: string;
    //um tema pode ter uma postagem ou pode ser um tema sem postagem, por isso o ? pra dizer que é opcional
    postagem?: Postagem[] | null;
}
import axios from "axios";

const api  = axios.create({
    //o endereço base, qualquer requisição vai pra o endereço do meu backend; 
    // se o back sair do render e for p outro, só preciso mudar essa linha de código
    baseURL: 'https://projeto-blog-pessoal-wfeb.onrender.com/'
})

//criando uma constante chamada cadastrar usuario, ela tem um export pra qlqr outro lugar do projeto chamar o cadastrar usuário
//o cadastrar usuário é uma função assíncrona, toda vez que eu chamar o cadastrar usuário, eu vou ter q passar uma string, um objeto e uma função
//
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}
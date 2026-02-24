import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './components/tema/listatemas/ListaTemas';
import FormTema from './components/tema/formtema/FormTema';
import DeletarTema from './components/deletartema/DeletarTema';
import ListaPostagens from './components/postagem/listapostagens/ListaPostagens';
import FormPostagem from './components/postagem/formpostagem/FormPostagem';
import DeletarPostagem from './components/postagem/deletarpostagem/DeletarPostagem';
import Perfil from './pages/perfil/Perfil';


function App() {
  return (
    <>
    {/* ativa a navegação do app, precisa colocar ele em volta de tudo que quero que seja navegável, ele vai ser a primeira coisa a carregar.
    Tudo que pode usar a navegação vai aqui dentro */}
    <AuthProvider>
      <BrowserRouter>
        {/* vem dentro do browserRouter pq são fixos, não mudam  */}
        <Navbar />
        {/* Define que a altura mínima da div é 80, ela vem antes do routes pq dentro deles só pode ter as rotas  */}
        <div className='min-h-[80vh]'>
          {/* tudo que vier dentro do routes é uma rota navegável, é alguma tela que vai ser aberta  */}
          <Routes>
          {/* Definir uma rota única pra home, ela não tem abertura e fechamento, ela fecha nela mesmo
          Toda route tem dois elementos, path é o caminho dela e o outro é o element, que é o elemento que ela carrega, coloca o componente entre chaves */}
            
            <Route path="/" element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastrartema" element={<FormTema />} />
            <Route path="/editartema/:id" element={<FormTema />} />
            <Route path="/deletartema/:id" element={<DeletarTema />} />
            <Route path="/postagens" element={<ListaPostagens />} />
            <Route path="/cadastrarpostagem" element={<FormPostagem />} />
            <Route path="/editarpostagem/:id" element={<FormPostagem />} />
            <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>

        {/* ela ta dentro do browserRouter mas embaixo pq quero o footer embaixo, mas dentro do browser pq ele é fixo  */}
        <Footer />
      </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

    const navigate = useNavigate();

    const {handleLogout} = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert("O usuário foi desconectado com sucesso!")
        navigate('/')
    }



    return(
        <>
            <div className="w-full flex justify-center py-4
                            bg-indigo-900 text-white">

                <div className="container flex justify-between text-lg mx-8">
                    {/* Com L maiusculo que é do browser, é a navegação pra onde eu quero que vá quando clicar  */}
                    <Link to = '/home' className="text-2x1 font-bold"> Blog Pessoal </Link>

                    <div className='flex gap-4'>
                        <Link to='/postagens' className='hover:underline'>Postagens</Link>
                        <Link to='/temas' className='hover:underline'>Temas</Link>
                        <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                        <Link to='/perfil' className='hover:underline'>Perfil</Link>
                        <Link to= '' onClick={logout} className='hover:undlerline'>Sair</Link>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Navbar
import { Link } from "react-router-dom"

function Navbar() {
    return(
        <>
            <div className="w-full flex justify-center py-4
                            bg-indigo-900 text-white">

                <div className="container flex justify-between text-lg mx-8">
                    {/* Com L maiusculo que é do browser, é a navegação pra onde eu quero que vá quando clicar  */}
                    <Link to = '/home' className="text-2x1 font-bold"> Blog Pessoal </Link>

                    <div className='flex gap-4'>
                        Postagens
                        Temas
                        Cadastrar tema
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Navbar
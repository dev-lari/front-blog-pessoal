import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import { useContext, type ReactNode } from "react"
import { AuthContext } from "../../contexts/AuthContext"

function Footer () {

    let data = new Date().getFullYear()

    const {usuario} = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {
        component = (
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-x1 font-semibold'>
                        Desenvolvido por Larissa de Souza • Copyright: {data}
                    </p>
                    <div className='flex gap-2 py-2'>
                        <a href="https://www.linkedin.com/in/lari-souza" target="_blank">
                            <LinkedinLogoIcon size={48} weight='regular'/>
                        </a>
                        <a href="https://github.com/dev-lari" target="_blank">
                        <GithubLogoIcon size={48} weight='regular'/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>     
            {component}
        </>

    )
}

export default Footer
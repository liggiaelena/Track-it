import logo from '../../logo/LogoInicial.png'
import { Logo, ClientInformation, Alternative, Page} from '../SharedStyles/StyleInitialPage';
import { Link } from "react-router-dom"

export default function SingUpPage(){


    return(
        <Page>
         <Logo>
            <img src={logo} alt="" />
        </Logo>
        <ClientInformation >
            <input placeholder="email"></input>
            <input placeholder="senha"></input>
            <input placeholder="nome"></input>
            <input placeholder="foto"></input>
            <button>Cadastrar</button>

            <Link to="/">
            <Alternative>
            Já tem uma conta? Faça login!
            </Alternative>
            </Link>
        </ClientInformation >
        
        </Page>

    );
}
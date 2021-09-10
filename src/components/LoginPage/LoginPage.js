import { Link } from 'react-router-dom';
import { Logo, ClientInformation, Alternative, Page} from '../SharedStyles/StyleInitialPage';
import logo from '../../logo/LogoInicial.png'

export default function LoginPage(){
    return (
        <Page>
        <Logo>
            <img src={logo} alt="" />
        </Logo>
        <ClientInformation >
            <input placeholder="email"></input>
            <input placeholder="senha"></input>
            <button>Entrar</button>

            <Link to="/cadastro">
            <Alternative>
                 Não tem uma conta? Cadastre-se!
            </Alternative>
            </Link>
        </ClientInformation >
        
        </Page>
    );
}

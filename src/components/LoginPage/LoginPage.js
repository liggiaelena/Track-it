import { Link } from 'react-router-dom';
import { Logo, ClientInformation, Alternative, Page} from '../SharedStyles/StyleInitialPage';
import logo from '../../logo/LogoInicial.png'
import { useState,useContext } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { postAccount } from '../../service';
import { useHistory } from 'react-router';
import  UserContext  from "../../contexts/UserContext"

export default function LoginPage(){
    const [loading, setLoading]= useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const { setToken } = useContext(UserContext);
  

    function enterAccount(){
        const body = { email, password }
        const promisse = postAccount(body);
        promisse.then((response)=>{
        history.push("/hoje");
        setToken(response.data.token);
        console.log(response.data)
    })
        setLoading(true)
        promisse.catch(()=>{
            alert("Essa conta não existe, verifique se email e senha estão corretos")
            setLoading(false);
        })

        setLoading(true);
    }
    return (
        <Page>
        <Logo>
            <img src={logo} alt="" />
        </Logo>
        <ClientInformation loading={loading}>
            <input placeholder="email" value={email} onChange={ e => setEmail(e.target.value)} disabled={loading}></input>
            <input placeholder="senha" type="password" value={password} onChange={ e => setPassword(e.target.value)} disabled={loading}></input>
            <button onClick={enterAccount}>{loading?  <Loader
      type="ThreeDots" color="#ffffff" height={50} width={60} 
       /> : "Entrar"}
             </button>

            <Link to="/cadastro">
            <Alternative>
                 Não tem uma conta? Cadastre-se!
            </Alternative>
            </Link>
        </ClientInformation >
        
        </Page>
    );
}

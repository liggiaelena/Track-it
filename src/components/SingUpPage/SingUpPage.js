import logo from '../../logo/LogoInicial.png'
import { Logo, ClientInformation, Alternative, Page} from '../SharedStyles/StyleInitialPage';
import { Link , useHistory} from "react-router-dom"
import { useState } from 'react';
import { postNewAccount } from '../../service';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function SingUpPage(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false)
    const history= useHistory();

    function createAccount(){
        const body = {name, email,password,image}
        const promisse = postNewAccount(body);
        promisse.then(()=>{history.push("/")})
        setLoading(true)
        promisse.catch(()=>{
            alert("Infelizmente não foi possivel realizar o seu cadastro, por favor tente novamente")
            setLoading(false);
        })
        
    }

    return(
        <Page initial={true}>
         <Logo>
            <img src={logo} alt="" />
        </Logo>
        <ClientInformation loading={loading}>
            <input placeholder="email" value={email} onChange={ e => setEmail(e.target.value)} disabled={loading}/>
            <input placeholder="senha" value={password} onChange={ e => setPassword(e.target.value)} disabled={loading}/>
            <input placeholder="nome" value={name} onChange={ e => setName(e.target.value)} disabled={loading}/>
            <input placeholder="foto" value={image} onChange={ e => setImage(e.target.value)} disabled={loading}/>
            <button onClick={createAccount}>{loading?  <Loader
      type="ThreeDots" color="#ffffff" height={50} width={60} 
       /> : "Cadastrar"}
             </button>

            <Link to="/">
            <Alternative>
            Já tem uma conta? Faça login!
            </Alternative>
            </Link>
        </ClientInformation >
        
        </Page>

    );
}
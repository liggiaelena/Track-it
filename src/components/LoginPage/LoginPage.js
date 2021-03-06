import { Logo, ClientInformation, Alternative, Page} from '../SharedStyles/StyleInitialPage';
import logo from '../../logo/LogoInicial.png'
import { useState, useContext, useEffect } from 'react';
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
    const { setToken,  setPhoto } = useContext(UserContext);
  

    function enterAccount(){
        const body = { email, password }
        const promisse = postAccount(body);
        promisse.then((response)=>{
            setToken(response.data.token);  
            setPhoto(response.data.image);
            window.localStorage.setItem('token', response.data.token)
            window.localStorage.setItem('image', response.data.image)
            history.push("/hoje");
        })

        setLoading(true)
        promisse.catch(()=>{
            alert("Essa conta não existe, verifique se email e senha estão corretos")
            setLoading(false);
        })

        setLoading(true);
    }

    useEffect(()=>{
        if(window.localStorage.getItem('token')){
            history.push('/hoje')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Page initial={true}>
            <Logo>
                <img src={logo} alt="" />
            </Logo>
            <ClientInformation loading={loading? "true" : ''}>
                <input placeholder="email" value={email} onChange={ e => setEmail(e.target.value)} disabled={loading}></input>
                <input placeholder="senha" type="password" value={password} onChange={ e => setPassword(e.target.value)} disabled={loading}></input>
                <button onClick={loading? "": enterAccount}>
                    {loading?  <Loader
                                type="ThreeDots" 
                                color="#ffffff" 
                                height={50} 
                                width={60} 
                                /> 
                    : "Entrar"}
                </button>   
                <Alternative onClick={()=> history.push("/cadastro")}>
                    Não tem uma conta? Cadastre-se!
                </Alternative>
            </ClientInformation >
        </Page>
    );
}

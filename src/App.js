import {BrowserRouter, Switch, Route} from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage';
import SingUpPage from './components/SingUpPage/SingUpPage';
import HabitsPage from './components/HabitsPage/HabitsPage';
import TodayPage from './components/TodayPage/TodayPage';
import HistoricPage from './components/HistoricPage/HistoricPage';
import './index.css';
import UserContext from './contexts/UserContext';
import { useState } from 'react';

function App(){
    const [photo, setPhoto] = useState(window.localStorage.getItem('image') || '');
    const [token, setToken] = useState(window.localStorage.getItem('token') || '');
    const [percentage, setPercentage] = useState(0);

    return(
        <UserContext.Provider value={{token, setToken, percentage, setPercentage, setPhoto, photo}}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <LoginPage /> 
                    </Route>
                    <Route path="/cadastro" exact>
                        <SingUpPage /> 
                    </Route>
                    <Route path="/habitos" exact>
                        <HabitsPage /> 
                    </Route>
                    <Route path="/hoje" exact>
                        <TodayPage />
                    </Route>
                    <Route path="/historico" exact>
                        <HistoricPage />
                    </Route>    
                </Switch>     
            </BrowserRouter>
        </UserContext.Provider>
    

    );
}

export default App
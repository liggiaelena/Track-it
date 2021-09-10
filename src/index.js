import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LoginPage from './components/LoginPage/LoginPage';
import SingUpPage from './components/SingUpPage/SingUpPage';
import HabitsPage from './components/HabitsPage/HabitsPage';
import TodayPage from './components/TodayPage/TodayPage';
import HistoricPage from './components/HistoricPage/HistoricPage';
import './index.css';
import UserContext from './contexts/UserContext';
import { useState } from 'react';

function Root(){
    const [token, setToken]= useState("");
    console.log(setToken)

    return(
        <UserContext.Provider value={token, setToken}>
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

ReactDOM.render(<Root />, document.querySelector(".root"));
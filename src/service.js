import axios from "axios";

function postNewAccount(body){
    const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",body);

    return(promisse);
}

function postAccount(body){
    const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",body);

    return(promisse);
}

function getTodayHabits(token){
    const config = {
        headers:{
            "Authorization": `Bearer ${token}`
        }
    }

    const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)

    return promisse;
}


export {
    postAccount,
    postNewAccount,
    getTodayHabits
}
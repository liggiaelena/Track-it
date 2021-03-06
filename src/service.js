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

function postNewHabit(name, days, token){
   
    const body ={
        name,
        days
    }
    
    const config = {
        headers:{
            "Authorization": `Bearer ${token}`
        }
    }

    const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",body ,config)

    return promisse;
}

function getAllHabits(token){

    const config = {
        headers:{
            "Authorization": `Bearer ${token}`
        }
    }

    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);

    return promise;
}

function deleteHabitAxios(id, token){

    const config = {
        headers:{
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);

    return promise;
}

function postTaskCompleted(id, checkbox, token){
    
    const config = {
        headers:{
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${checkbox}`,{},config);

    return promise;
}


export {
    postAccount,
    postNewAccount,
    getTodayHabits,
    postNewHabit,
    getAllHabits,
    deleteHabitAxios,
    postTaskCompleted
}
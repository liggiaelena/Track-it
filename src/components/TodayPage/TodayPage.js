import Top from "../SharedComponents/Top";
import Bottom from "../SharedComponents/Bottom";
import TodayTask from "./TodayTask";
import {Page,Header} from "../SharedStyles/StylePage";
import { useState, useEffect, useContext } from 'react';
import { getTodayHabits, postTaskCompleted } from "../../service";
import * as dayjs from 'dayjs'
import  UserContext  from "../../contexts/UserContext";
import styled from "styled-components";

export default function TodayPage(){
    require('dayjs/locale/pt-br') 
    const date = dayjs().locale('pt-br').format('dddd, MM/DD');
    const { token, setPercentage } = useContext(UserContext);
    const [tasks, setTasks] =useState([]);
    const [x, setX] = useState(0);
   

    useEffect(()=>{
        const promisse = getTodayHabits(token);
        promisse.then((response)=>{
            console.log(response.data)
            setTasks(response.data)
            setPercentage()
        })


    },[x]);

    function isTaskCompleted(id, done){
        let checkbox = '';
        if(done){
            checkbox = 'uncheck';
        }
        else{
            checkbox = 'check'
        }
        const promise = postTaskCompleted(id,checkbox, token);
        promise.then(()=>{
            setX(x+1);
        })
    }

    

    return(
        <>
        <Top />
            <Page>
                <Header>   
                    {date}
                </Header>
                <Subtitle>Nenhum hábito concluído ainda</Subtitle>
                {tasks.map((task)=> <TodayTask task={task} isTaskCompleted={isTaskCompleted}></TodayTask>)}
            </Page>

        <Bottom/>
        </>

    );
}





const Subtitle = styled.div`
 
    font-size: 18px;
    color: #BABABA;
   margin-top: 10px;
   width: 90%;

`
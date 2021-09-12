import Top from "../SharedComponents/Top";
import Bottom from "../SharedComponents/Bottom";
import TodayTask from "./TodayTask";
import {Page,Header} from "../SharedStyles/StylePage";
import { useState, useEffect, useContext } from 'react';
import { getTodayHabits } from "../../service";
import * as dayjs from 'dayjs'
import  UserContext  from "../../contexts/UserContext";
import styled from "styled-components";

export default function TodayPage(){
    require('dayjs/locale/pt-br') 
 const date = dayjs().locale('pt-br').format('dddd, MM/DD');
    const { token, setPercentage } = useContext(UserContext);
    console.log(token)
    const [tasks, setTasks] =useState([]);
    console.log(tasks)

    useEffect(()=>{
        const promisse = getTodayHabits(token);
        promisse.then((response)=>{
            console.log(response.data)
            setTasks(response.data)
        })


    },[]);

    

    return(
        <>
        <Top />
            <Page>
                <Header>   
                    {date}
                </Header>
                <Subtitle>Nenhum hábito concluído ainda</Subtitle>
                {tasks.map((task)=>{
                    <TodayTask task={task} />
                    console.log(task)
                })}
                

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
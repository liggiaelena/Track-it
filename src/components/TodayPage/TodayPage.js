import Top from "../SharedComponents/Top";
import Bottom from "../SharedComponents/Bottom";
import TodayTask from "./TodayTask";
import {Page,Header} from "../SharedStyles/StylePage";
import { useState, useEffect, useContext } from 'react';
import { getTodayHabits, postTaskCompleted } from "../../service";
import * as dayjs from 'dayjs'
import  UserContext  from "../../contexts/UserContext";
import styled from "styled-components";
import { ContainerWhiteBoxes} from "../SharedStyles/StyleHabits";

export default function TodayPage(){
    require('dayjs/locale/pt-br') 
    const date = dayjs().locale('pt-br').format('dddd, DD/MM');
    const { token, setPercentage , percentage} = useContext(UserContext);
    const [tasks, setTasks] =useState([]);
    const [x, setX] = useState(0);
    let somethingDone =false
   

    useEffect(()=>{
        const promisse = getTodayHabits(token);
        promisse.then((response)=>{
    
            setTasks(response.data)
            calculatePercentage(response.data)
           
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

    function calculatePercentage(array){
        const newArray = array.filter((item)=> item.done)

        let percentage = (newArray.length/array.length).toFixed(2) * 100;
        setPercentage(percentage)

    }

    if(percentage !== 0){
        somethingDone = true;
    }
    

    return(
        <>
        <Top />
            <Page>
                <Header>   
                    {date}
                </Header>
                <Subtitle somethingDone={somethingDone}>{somethingDone? `${percentage}% dos hábitos concluídos`:"Nenhum hábito concluído ainda"}</Subtitle>
                <ContainerWhiteBoxes>
                {tasks.map((task)=> <TodayTask task={task} isTaskCompleted={isTaskCompleted}></TodayTask>)}
                </ContainerWhiteBoxes>
            </Page>

        <Bottom/>
        </>

    );
}





const Subtitle = styled.div`
 
    font-size: 18px;
    color: ${(props)=> props.somethingDone? '#8FC549':"#BABABA"};
   margin-top: 10px;
   width: 90%;

`
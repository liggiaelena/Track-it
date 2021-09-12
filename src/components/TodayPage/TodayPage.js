import Top from "../SharedComponents/Top";
import Bottom from "../SharedComponents/Bottom";
import {Page,Header} from "../SharedStyles/StylePage";
import { useState, useEffect, useContext } from 'react';
import { getTodayHabits } from "../../service";
import * as dayjs from 'dayjs'
import  UserContext  from "../../contexts/UserContext"

export default function TodayPage(){
    require('dayjs/locale/pt-br') 
 const date = dayjs().locale('pt-br').format('dddd, MM/DD');
    const { token, setPercentage } = useContext(UserContext);
    console.log(token)


    useEffect(()=>{
        const promisse = getTodayHabits(token);
        promisse.then((response)=>{
            console.log(response.data)
        })


    },[]);

    
    
    

    return(
        <>
        <Top />
            <Page>
                <Header>   
                    {date}
                </Header>


            </Page>

        <Bottom/>
        </>

    );
}
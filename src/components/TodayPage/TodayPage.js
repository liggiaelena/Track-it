import Top from "../SharedComponents/Top"
import Bottom from "../SharedComponents/Bottom";
import {Page,Header} from "../SharedStyles/StylePage";
import { useState, useEffect } from 'react';
import { getTodayHabits } from "../../service";

export default function TodayPage(){

    // useEffect(()=>{
    //     const promisse = getTodayHabits(token);
    //     promisse.then((response)=>{
    //         console.log(response.data)
    //     })


    // },[]);

    return(
        <>
        <Top />
            <Page>
                <Header>
                    Segunda, 17/05
                </Header>


            </Page>

        <Bottom/>
        </>

    );
}
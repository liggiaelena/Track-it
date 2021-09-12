
import { useState } from "react";
import {Day } from "../SharedStyles/StyleHabits"

export default function Days(){

    return(

        <>
               {weekDays.map((day,i)=> <Day>{day} </Day>)}

        </>
    );
}


const weekDays = ["D", "S", "T" ,"Q", "Q", "S", "S"];

// Nao sei pq qaundo entra no saite a autorizacao vai errado  ele quer usar <token> nao sei pq, alem disso tem que implementar quando escolhe um dos dis para ele ficar cinza
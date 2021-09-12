import { useState } from "react";
import { Day, Week, WhiteBox, ContainerWhiteBoxes, Box,Cancelar, Salvar} from "../SharedStyles/StyleHabits"
import  Days from "./Days"

 
export default function NewHabit({createNewHabit}){
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);

    return(
        <ContainerWhiteBoxes>
            <WhiteBox>
                <Box >
                 <input placeholder="nome do hábito" value={name} onChange={(e)=> setName(e.target.value)}/> 
                </Box>
            <Week>
                <Days/>
            </Week>
            <Box position="flex-end">
                <Cancelar>Cancelar</Cancelar>
            <Salvar>Salvar</Salvar>
            </Box>
            
        </WhiteBox>
        </ContainerWhiteBoxes>
        

    );
}


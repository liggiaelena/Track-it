import { Week, WhiteBox, ContainerWhiteBoxes, Box,Cancelar, Salvar} from "../SharedStyles/StyleHabits"
import  Day from "./Day"
import Loader from "react-loader-spinner";


 
export default function NewHabit({saveNewHabit, name, setName, setBoxCreatingHabit, loading}){


    return(
        <ContainerWhiteBoxes>
            <WhiteBox>
                <Box >
                 <input placeholder="nome do hábito" value={name} onChange={(e)=> setName(e.target.value)} disabled={loading} /> 
                </Box>
            <Week>
            {weekDays.map((dayName,i)=> <Day key={i} dayName={dayName} i={i} loading={loading} />)}
            </Week>
            <Box position="flex-end">
                <Cancelar onClick={loading? "": ()=>setBoxCreatingHabit(false)}>Cancelar</Cancelar>
            <Salvar onClick={loading? "": saveNewHabit}>{loading?  <Loader
      type="ThreeDots" color="#ffffff" height={40} width={60} 
       /> : "Salvar"}</Salvar>
            </Box>
            
        </WhiteBox>
        </ContainerWhiteBoxes>
        

    );
}

const weekDays = ["D", "S", "T" ,"Q", "Q", "S", "S"];
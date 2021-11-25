import { BsTrash } from "react-icons/bs";
import { Week, WhiteBox, Box} from "../SharedStyles/StyleHabits"
import FixedDay from "./FixedDay"

export default function Habit(props){
   const { name, days , id} = props.habit;
   const  deleteHabit =props.deleteHabit;

    return(
        <WhiteBox>
            <Box position={"space-between"}>
                <p>{name}</p>
                <BsTrash 
                fontSize="17px" 
                onClick={()=> deleteHabit(id)}
                />
            </Box>
            <Week>
                {weekDays.map((dayName,i)=> <FixedDay key={i} dayName={dayName} i={i} days={days}/>)}
            </Week>
        </WhiteBox>
    );
}

const weekDays = ["D", "S", "T" ,"Q", "Q", "S", "S"];
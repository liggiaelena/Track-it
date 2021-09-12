
import { useState, useContext } from "react";
import { WeekDay } from "../SharedStyles/StyleHabits";
import HabitsContext from "../../contexts/HabitsContext";


export default function Day({dayName, i, loading}){
    const [choose, setChoose] = useState(false);
    const {days, setDays} = useContext(HabitsContext);


    function chooseSeat(){
        
        if(choose){
            let newdays = days.filter((day)=> day !== i )
            setDays(newdays);
        }
        else{
            setDays([...days,i])
        }

        setChoose(!choose);
        
    }


    return(

        <WeekDay choose={choose} onClick={loading? "":chooseSeat}>
            {dayName}
        </WeekDay>
    );
}


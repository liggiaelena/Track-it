
import { useState, useContext } from "react";
import { WeekDay } from "../SharedStyles/StyleHabits";
import HabitsContext from "../../contexts/HabitsContext";
import { useEffect } from "react";

export default function Day({dayName, i, loading}){
    const [choose, setChoose] = useState(false);
    const {days, setDays} = useContext(HabitsContext);

    function chooseSeat(){
        
        if(choose){
            let newdays = days.filter((day)=> day !== i )
            setDays(newdays);
        }
        else {setDays([...days,i])}

        setChoose(!choose);
    }

    useEffect(()=>{
        let haveBeenSelected = days.filter((day)=> day === i)

        if(haveBeenSelected.length !== 0){
            setChoose(true)
        }
        else{
            setChoose(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <WeekDay choose={choose} onClick={loading? "":chooseSeat}>
            {dayName}
        </WeekDay>
    );
}


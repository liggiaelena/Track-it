import { WeekDay } from "../SharedStyles/StyleHabits";


export default function FixedDay({dayName, i, days}){
    let choose = false;

    days.find((day)=>{
        if(day === i){
            choose = true;
            return true
        }
       
    })



    return(

        <WeekDay choose={choose} >
            {dayName}
        </WeekDay>
    );
}
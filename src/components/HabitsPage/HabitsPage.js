import Top from "../SharedComponents/Top"
import Bottom from "../SharedComponents/Bottom";
import { Page, Header } from "../SharedStyles/StylePage"
import NewHabit from "./NewHabit";
import { useState } from "react";
//import Habit from "./Habit";


export default function HabitsPage(){
    const [boxCreatingHabit, setBoxCreatingHabit]= useState(false);
    const [newHabit, setNewHabit] = useState({});


    function createNewHabit(info){
      setNewHabit({...newHabit, info});
    }

    return(
        <>
            <Top />
            <Page>
                <Header>
                    <h1>Meus hábitos</h1>
                    <button onClick={()=> setBoxCreatingHabit(true)}>+</button>
                </Header>
                {boxCreatingHabit? <NewHabit createNewHabit={createNewHabit}/> : ""}
                
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            {/* <Habit /> */}
            </Page>
            <Bottom />
        </>
    );
}




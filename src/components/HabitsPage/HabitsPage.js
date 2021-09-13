import Top from "../SharedComponents/Top"
import Bottom from "../SharedComponents/Bottom";
import { Page, Header } from "../SharedStyles/StylePage"
import NewHabit from "./NewHabit";
import { useState, useContext, useEffect } from "react";
import HabitsContext from '../../contexts/HabitsContext';
import {postNewHabit, getAllHabits, deleteHabitAxios} from "../../service"
import UserContext from "../../contexts/UserContext";
import Habit from "./Habit";
import { ContainerWhiteBoxes } from "../SharedStyles/StyleHabits";


export default function HabitsPage(){
    const [boxCreatingHabit, setBoxCreatingHabit]= useState(false);
    const [haveHabits, setHaveHabit] = useState(false);
    const [loading, setLoading]= useState(false);
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);
    const { token } = useContext(UserContext);
    const [habits , setHabits] = useState([])
    const [x, setX] = useState(0)
   

    useEffect(()=>{
        const promise = getAllHabits(token);
        promise.then((resp)=>{
            if(resp.data.length !== 0){    
                setHabits(resp.data)
                setHaveHabit(true)
            }
        });

    },[x])


    function saveNewHabit(){
      setLoading(true);
      const promisse = postNewHabit(name, days, token);
      promisse.then(()=> {
        setName("");
        setDays([]);
        setX(x+1);
        setLoading(false);
        setBoxCreatingHabit(false);

      });
      promisse.catch(error)
       
    }


    function error(erro){
        setName("");
        setDays([]);
        setLoading(false)
        setBoxCreatingHabit(true);
        if(erro.response.status === 422){
            alert("campos invalidos, por favor tente novamente");
        }
        
    }

    function deleteHabit(id){
        const response = window.confirm("Você realmente gostaria de apagar este hábito?");
        if(response){
            const promise = deleteHabitAxios(id, token);
            promise.then(()=> setX(x+1));
        }
    }



    return(
        <>
        <HabitsContext.Provider value={{days, setDays}}>
            <Top />
            <Page>
                <Header>
                    <h1>Meus hábitos</h1>
                    <button onClick={()=> setBoxCreatingHabit(true)}>+</button>
                </Header>
                <ContainerWhiteBoxes>
                    {boxCreatingHabit? <NewHabit saveNewHabit={saveNewHabit} name={name} setName={setName} setBoxCreatingHabit={setBoxCreatingHabit} loading={loading}/> : ""}
                
                <p>{haveHabits? '': "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"}</p>
                {habits.map((habit)=> <Habit  habit={habit} deleteHabit={deleteHabit}/>)}

                </ContainerWhiteBoxes>
                
            </Page>
            <Bottom />
            </HabitsContext.Provider>
        </>
    );
}




import Top from "../SharedComponents/Top"
import Bottom from "../SharedComponents/Bottom";
import {Page, Header} from "../SharedStyles/StylePage"
import NewHabit from "./NewHabit";
//import Habit from "./Habit";


export default function HabitsPage(){
    return(
        <>
            <Top />
            <Page>
                <Header>
                    <h1>Meus hábitos</h1>
                    <button>+</button>
                </Header>
                <NewHabit/>
                
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            {/* <Habit /> */}
            </Page>
            <Bottom />
        </>
    );
}




import {  WhiteBox, Box} from "../SharedStyles/StyleHabits";
import { IoIosCheckbox } from "react-icons/io";
import styled from "styled-components";


export default function TodayTask(props){
    let isRecord= false;
  
    const {
        id,
        name,
        done,
        currentSequence,
        highestSequence
    } = props.task;
    const isTaskCompleted = props.isTaskCompleted;

    if(currentSequence === highestSequence){
        isRecord = true;
    }
   

    return(
           
       
        <WhiteBox padding="0px">
            <Box position="space-between" >
                <MiniBox done={done}>
                  <p>{name}</p>  
                  <h5>Sequência atual: <span>{currentSequence}</span></h5>
                  <h5>Seu recorde: <Record isRecord={isRecord}>{highestSequence}</Record></h5>
                </MiniBox>
                <IoIosCheckbox 
                    fontSize="100px"
                    color={done? "#8FC549" : "#EBEBEB"}
                    onClick={()=>isTaskCompleted(id,done)}
                /> 
            </Box>
        </WhiteBox>
 
    );
}




const MiniBox = styled.div`
    display: flex;
    flex-direction: column;
   height: 100px;
   margin-left: 10px;
   width: 60%;

   p{
       margin-top: 10px;
       margin-bottom: 7px;
       margin-left: 0px;
   }

   h5{
        margin-top: 5px;
        color: #666666;
   }
   span{
       color: ${(props)=> props.done? "#8FC549": "#666666"};
   }
`  
const Record = styled.span`
    color: ${(props)=> props.isRecord? "#8FC549": "#666666"};
`
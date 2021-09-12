import {  WhiteBox, ContainerWhiteBoxes, Box} from "../SharedStyles/StyleHabits"
import { IoIosCheckbox } from "react-icons/io";
import styled from "styled-components";


export default function TodayTask(){
    console.log("oiiiiiiiiiii");
    // const {
    //     id,
    //     name,
    //     done,
    //     currentSequence,
    //     highestSequence
    // } = props.task;
    // console.log(props.task)

    return(
        <MiniBox>
            hello
        <ContainerWhiteBoxes>
        {/* <WhiteBox padding="0px">
            <Box position="space-between" >
                <MiniBox>
                  <p>{name}</p>  
                  <h5>Sequência atual: {currentSequence}</h5>
                  <h5>Seu recorde: {highestSequence}</h5>
                </MiniBox>
               
                <IoIosCheckbox 
                fontSize="120px"
                color={done? "#8FC549" : "#EBEBEB"}
                /> 
            </Box>
            
        </WhiteBox> */}
    </ContainerWhiteBoxes>
    </MiniBox>
    );
}




const MiniBox = styled.div`
    display: flex;
    flex-direction: column;
   height: 100px;
   margin-left: 10px;

   p{
       margin-top: 10px;
       margin-bottom: 7px;
       margin-left: 0px;
   }

   h5{
        margin-top: 5px;
        color: #666666;
   }
`  
import { BsTrash } from "react-icons/bs";
import { Day, Week, WhiteBox, ContainerWhiteBoxes, Box} from "../SharedStyles/StyleHabits"

 
export default function Habit(){

    return(
        <ContainerWhiteBoxes>
            <WhiteBox>
                <Box>
                 <p>Ler 1 capítulo de livro</p>
                 <BsTrash 
                 fontSize="17px" 
                 />
                </Box>
            
            <Week>
                <Day>D</Day>
                <Day>S</Day>
                <Day>T</Day>
                <Day>Q</Day>
                <Day>Q</Day>
                <Day>S</Day>
                <Day>S</Day>
            </Week>
        </WhiteBox>
        </ContainerWhiteBoxes>
        

    );
}

import { Day, Week, WhiteBox, ContainerWhiteBoxes, Box,Cancelar, Salvar} from "../SharedStyles/StyleHabits"

 
export default function NewHabit(){

    return(
        <ContainerWhiteBoxes>
            <WhiteBox>
                <Box >
                 <input placeholder="Novo hábito..."/> 
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
            <Box position="flex-end">
                <Cancelar>Cancelar</Cancelar>
            <Salvar>Salvar</Salvar>
            </Box>
            
        </WhiteBox>
        </ContainerWhiteBoxes>
        

    );
}

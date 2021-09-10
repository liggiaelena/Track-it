import styled from "styled-components";

const ContainerWhiteBoxes = styled.div`
        margin-top: 25px;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;

`
const WhiteBox = styled.div`
    width: 90%;
    height: auto;
    padding: 13px;
    background-color: #ffffff;
    border-radius: 5px;

    p{
        font-size: 20px;
        margin: 0px 10px;
    }

    input{
        width: 95%;
        color:#666666;
        font-size: 20px;
        padding-left: 10px;
    }

`
const Box = styled.div`
    display: flex;
    justify-content: ${(props)=> props.position || "center"};
    align-items: center;
    margin-top:5px;
`
const Week = styled.div`
    margin-left: 5px;
    display: flex;

    & :nth-child(2n+1){
        background-color: #ffffff;
        color: #DBDBDB;
    }  
    & :nth-child(2n){
        background-color: #CFCFCF;
        color: #ffffff;
    }   

`
const Day = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    font-size: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-top: 10px;
`
const Cancelar = styled.div`
    width: 84px;
    height: 35px;
    color: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    
`
const Salvar= styled.div`
    width: 84px;
    height: 35px;
    color: #ffffff;
    background-color: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

`

export{
    Day,
    Week,
    WhiteBox,
    ContainerWhiteBoxes,
    Box,
    Cancelar,
    Salvar
}
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
export default function Bottom(){
    const percentage = 20;
    return(
        <Container>
            <Menu>
                <p>Hábitos</p> 
                <p>Histórico</p>
            </Menu>
            <Progress>
                <CircularProgressbar styles={buildStyles({
                pathColor: `#ffffff`,
                trailColor: "transparent",
                textColor:"#ffffff",
                textSize: "18px",
                strokeLinecap: 'round',
                pathTransitionDuration: 1.2
                })}
                value={percentage}
                text="Hoje"
                />
            </Progress>  
        </Container>
    );
}


const Menu = styled.div`
    position: fixed;
    z-index:1;
    bottom: 0;
    left: 0;
    width: 100vw;
    background: #ffffff;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        font-size: 18px;
        color: #52B6FF;
        padding: 0px 30px;
    }
`
const Progress =styled.div`
    position: fixed;
    z-index:2;
    bottom: 10px;
    background-color:#52B6FF;
    border-radius: 100%;
    width: 91px;
    height: 91px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 6px;
`
const Container = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
`

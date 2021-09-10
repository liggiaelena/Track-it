import Logo from "../../logo/Logo.png";
import styled from 'styled-components';

export default function Top(){
    return(
        <Banner>
            <LogoImg src={Logo} />
            <Profile src= "https://ptanime.com/wp-content/uploads/2018/12/Boku-no-Hero-Academia-anime-young-deku-destaque.jpg" />
        </Banner>
    );
}


const Banner = styled.div`
    background-color: #126BA5;
    display: flex;
    width: 100vw;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

`
const Profile = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 100%;
    margin-right: 20px;
`
const LogoImg = styled.img`
    width: auto;
    height: 30px;
    padding-left: 20px;

`

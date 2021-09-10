import styled from 'styled-components';


const Page = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        color: #666666;
        font-size: 18px;
        line-height: 22px;
        display: inline-block;
        width: 87%;
        margin-top: 40px;
    }

`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 100px;
    font-size: 23px;
    color:#126BA5;

    button{
        background-color: #52B6FF;
        font-size: 27px;
        border:none;
        border-radius: 4.6px;
        width: 40px;
        height: 35px;
        color: #ffffff;
       
    }

`
export{
    Page,
    Header
}
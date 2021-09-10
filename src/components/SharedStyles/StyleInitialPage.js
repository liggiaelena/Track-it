import styled from 'styled-components';

const Logo = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   padding: 70px 0px;

   img{
       width: 180px;
   }
`
const ClientInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 

    button{
        width: 300px;
        height: 45px;
        background-color: #52B6FF;
        border-radius: 4.6px;
        color: #ffffff;
        font-size: 21px;
        text-align: center;
        border: none;
    }

   
 
`
 const Alternative = styled.a`
    display: inline-block;
     padding-top: 30px;
     color: #52B6FF;
     font-size: 14px;
     text-decoration: underline;
     text-decoration-color: #52B6FF;
 `

 const Page = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
 
 `
export{
    Logo,
    ClientInformation,
    Alternative,
    Page
}
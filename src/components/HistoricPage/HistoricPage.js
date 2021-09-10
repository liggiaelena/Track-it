import Top from "../SharedComponents/Top"
import Bottom from "../SharedComponents/Bottom";
import {Page,Header} from "../SharedStyles/StylePage";

export default function HistoricPage(){

    return(
        <>
        <Top />
        <Page>
            <Header>
            Histórico
            </Header>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Page>

        <Bottom/>
        </>

    );
}
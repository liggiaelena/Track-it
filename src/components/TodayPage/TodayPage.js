import Top from "../SharedComponents/Top"
import Bottom from "../SharedComponents/Bottom";
import {Page,Header} from "../SharedStyles/StylePage";

export default function TodayPage(){

    return(
        <>
        <Top />
            <Page>
                <Header>
                    Segunda, 17/05
                </Header>


            </Page>

        <Bottom/>
        </>

    );
}
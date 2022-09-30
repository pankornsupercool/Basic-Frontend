import {
    A1,
    Container1,
    ExpContainer,
    MainContainer1,
} from '../Interface/Experiences';

function Experiences() {
    return (
        <ExpContainer>
            <MainContainer1>
                <Container1>
                    <h1>Army Air Defense System | 2020-2021</h1>
                    <p>Working with BU-MIT LAB TEAM ✈️</p>
                    <img
                        src='https://i.ibb.co/q5zvctt/AADS.png'
                        alt='Girl in a jacket'
                        width='900'
                        height='510'
                    ></img>
                    <p>AADS is a simulated radar software for the military.</p>
                    <p>
                        Included creation of marker, corridor, route and aircraft
                        directions.
                    </p>
                    <p>Using : C#, Window Form, .NET, GMap</p>
                    <h1>🔻</h1>
                </Container1>
            </MainContainer1>

            <MainContainer1>
                <Container1>
                    <h1>The Rich Decentralized Finance | 2021-2022</h1>
                    <p>Graduation Project 🪙</p>
                    <img
                        src='https://i.ibb.co/Z263bw2/Therich.png'
                        alt='www'
                        width='900'
                        height='510'
                    ></img>
                    <p>
                        The Rich is a DeFi application that building on Moonbase Alpha
                        chain.
                    </p>
                    <p>You can swap and earn liquidity in our application.</p>
                    <p>Using : React, Styled-Components, Solidity, Framer-motion</p>
                    <A1 href='https://therichdex.netlify.app/#/'>Visit Website</A1>
                </Container1>
            </MainContainer1>
        </ExpContainer>
    );
}
export default Experiences;

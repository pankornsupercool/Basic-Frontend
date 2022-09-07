import { styled } from "styled-components"

import {
    HeaderContainer, Container1, Container2, Container3,

} from '../Interface/Header';

import { motion } from "framer-motion";
import Typed from "react-typed";
function HomePage() {
    return (
        <HeaderContainer>
            <Container1>
                <p>Welcome to my Portfolio</p>
            </Container1>
            <Container2>
                {/* <h1 >Hi! I'm Pankorn Front-end Developer🌻 </h1> */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}

                >Hello There! I'm Pankorn Front-end Developer🌻
                </motion.h1>

                <Typed strings={[
                    'Front-End Developer, Day Trader, Reader and Listener.',
                    'Looking For Internship on Front-end Field.',

                ]}
                    typeSpeed={50}
                    backSpeed={50}
                />
            </Container2>
            <Container3>
                <h3>Get to know me better 🎃</h3>
                <p>👨‍🚀 Full Name: Pankorn Wangsakun</p>
                <p>📔 Currently Study on: Bangkok University</p>
                <p>🪅 Looking to Internship on: Front-end Developer </p>
            </Container3>
        </HeaderContainer>
    );
}

export default HomePage;
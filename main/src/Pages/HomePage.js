import {
    HeaderContainer, Container1, Container2, Container3, Container4_Major, Container4_Child1, Container4_Child2
    , Container5_Major, Container5_Child1, Container5_Child2, Container6_Major, Container6_Child1, Container6_Child2,
    Container7_Major, Container7_Child1, Container7_Child2
} from '../Interface/Header';
import { motion } from "framer-motion";

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

                >Hi! I'm Pankorn Front-end Developer🌻
                </motion.h1>

                <p>Front-end Developer, Day Trader, Reader, Listener.</p>
                <motion.button whileHover={{ scale: 2 }}>Click</motion.button>
            </Container2>
        </HeaderContainer>
    );
}

export default HomePage;
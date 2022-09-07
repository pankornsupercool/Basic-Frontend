import styled from 'styled-components'
import "./style.css";
import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import SidebarMain from './Pages/SidebarMain';
import HomePage from './Pages/HomePage';
import ProgrammingSkill from './Pages/ProgrammingSkill';
import Experiences from './Pages/Experiences';
import Showcase from './Pages/Showcase';
// import {
//   Sidebar, Logo_content, Logo_name, Sidebar_ul, Logo, Side_a
//   , Profile_content, Profile, Profile_details, name_job, Name, Job, Sidebar_li, Sidebar_i
// } from './Interface/Sidebar';


// import {
//   HeaderContainer, Container1, Container2, Container3, Container4_Major, Container4_Child1, Container4_Child2
//   , Container5_Major, Container5_Child1, Container5_Child2, Container6_Major, Container6_Child1, Container6_Child2,
//   Container7_Major, Container7_Child1, Container7_Child2
// } from './Interface/Header';



const Div = styled.div`
font-family: 'Source Code Pro', monospace;
  display:flex;

`


function App() {
  return (
    <Div>
      <SidebarMain>
      </SidebarMain>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/programmingskill' element={< ProgrammingSkill />} />
        <Route path='/experiences' element={< Experiences />} />
        <Route path='/showcase' element={< Showcase />} />
      </Routes>
      {/* <HeaderContainer>
        <Container1>
          <p>Welcome to my Portfolio</p>
        </Container1>
        <Container2>
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
          >Hi! I'm Pankorn Front-end Developer🌻
          </motion.h1>
          <Typed strings={['Font-end Developer, Day Trader,  Reader,  Listener.',]} typeSpeed={80} backSpeed={80} />
        </Container2>
      </HeaderContainer> */}

    </Div>
  );
}

export default App;

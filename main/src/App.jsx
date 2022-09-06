import styled from 'styled-components'
import "./style.css";

import {
  Sidebar, Logo_content, Logo_name, Sidebar_ul, Logo, Side_a
  , Profile_content, Profile, Profile_details, name_job, Name, Job, Sidebar_li, Sidebar_i
} from './Interface/Sidebar';


import {
  HeaderContainer, Container1, Container2, Container3, Container4_Major, Container4_Child1, Container4_Child2
  , Container5_Major, Container5_Child1, Container5_Child2, Container6_Major, Container6_Child1, Container6_Child2,
  Container7_Major, Container7_Child1, Container7_Child2
} from './Interface/Header';

import { motion } from "framer-motion";
import { Switch, Route } from 'react-router-dom';
import Typed from "react-typed";

const Div = styled.div`
font-family: 'Source Code Pro', monospace;
  display:flex;

`

function wasp(greeting) {
  return greeting.firstName + ' ' + greeting.lastName;
}

function App() {
  return (
    <Div>
      <Sidebar>
        <Logo_content>
          <Logo>
            <i class='bx bxs-cat'></i>
            <Logo_name>PANKORN.WANG</Logo_name>
          </Logo>
        </Logo_content>
        <Sidebar_ul>
          <Sidebar_li>
            <Side_a href="#">
              <i class='bx bx-spa' ></i>
              <span>Home Page</span>
            </Side_a>
          </Sidebar_li>
          {/* Space */}

          {/* Space */}
          <Sidebar_li>
            <Side_a href="#">
              <i class='bx bx-spa' ></i>
              <span>Programming Skills</span>
            </Side_a>
          </Sidebar_li>
          {/* Space */}
          <Sidebar_li>
            <Side_a href="#">
              <i class='bx bx-spa' ></i>
              <span>Experiences</span>
            </Side_a>
          </Sidebar_li>
          {/* Space */}
          <Sidebar_li>
            <Side_a href="#">
              <i class='bx bx-spa' ></i>
              <span>Bookshelf</span>
            </Side_a>
          </Sidebar_li>
          {/* Space */}
          <Sidebar_li>
            <Side_a href="#">
              <i class='bx bx-spa' ></i>
              <span>Trading</span>
            </Side_a>
          </Sidebar_li>
          {/* Space */}
          <Sidebar_li>
            <Side_a href="#">
              <i class='bx bx-spa' ></i>
              <span>Showcase</span>
            </Side_a>
          </Sidebar_li>
          {/* Space */}
          <Sidebar_li>
            <Side_a href="#">
              <i class='bx bx-spa' ></i>
              <span>GitHub & LinkedIn</span>
            </Side_a>
          </Sidebar_li>
          {/* Space */}
        </Sidebar_ul>
        <Profile_content>
          <Profile>
            <Profile_details>
              <img className='imgs' src="https://cdn.oneesports.co.th/cdn-data/sites/3/2022/03/Valorant_RetakeEpisode2CinematicViperScreenshot-1024x576-2.jpg" alt="" />
              <name_job>
                <Name>Looking for internship</Name>
                <Job>Front-End Developer.</Job>
              </name_job>
            </Profile_details>
          </Profile>
        </Profile_content>
      </Sidebar>

      <HeaderContainer>
        <Container1>
          <p>Welcome to my Portfolio</p>
        </Container1>
        <Container2>
          {/* <h1 >Hi! I'm Pankorn Front-end Developer🌻 </h1> */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}

          >Hi! I'm Pankorn Front-end Developer🌻
          </motion.h1>
          <Typed strings={['Font-end Developer, Day Trader,  Reader,  Listener.',]} typeSpeed={80} backSpeed={80} />

        </Container2>
      </HeaderContainer>
    </Div>
  );
}

export default App;

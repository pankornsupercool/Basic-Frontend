import styled from 'styled-components'
import { NavbarMain, NavbarTitle, NavbarTools, NavbarLogo, NavbarMenu, NavbarA, NavbarPblue, NavbarPblack } from './Interface/Navbar';
import { HeaderContainer } from './Interface/Header';

const Div = styled.div`
font-family: 'Roboto', sans-serif;
`

const greeting = {
  firstName: 'Pankorn',
  lastName: 'Wangsakun'
};

function wasp(greeting) {
  return greeting.firstName + ' ' + greeting.lastName;
}

function App() {
  return (
    <Div>
      <NavbarTitle>
        <NavbarPblack>Pankorn Wangsakun , </NavbarPblack>
        <NavbarPblue> Trader and Front-end Developer.</NavbarPblue>
      </NavbarTitle>
      <NavbarMain>
        <NavbarTools>
          <NavbarLogo>
            <p>Pankorn.Wang</p>
          </NavbarLogo>
          <NavbarMenu>
            <NavbarA href='#'>Get to know me</NavbarA>
            <NavbarA href='#'>Skills</NavbarA>
            <NavbarA href='#'>Showcase</NavbarA>
            <NavbarA href='#'>Git Hub</NavbarA>
            <NavbarA href='#'>Books</NavbarA>
          </NavbarMenu>
        </NavbarTools>
      </NavbarMain>
      <HeaderContainer>
        <h1>Getting To Know Me..</h1>
      </HeaderContainer>
    </Div>
  );
}

export default App;

import styled from "styled-components";
// ` `
export const NavbarTitle = styled.div`
    height: 50px;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #16181d;
    color: white;
`
export const NavbarMain = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #20232a;
    color:white;
`
export const NavbarTools = styled.div`
    height: 60px;
    width: 70%;
    display :flex;
    
`

export const NavbarLogo = styled.div`
display:flex;
    height: 60px;
    width: 20%;
    text-align:center;
    align-items: center;
`

export const NavbarMenu = styled.div`
    height: 60px;
    width: 100%;
    display:flex;
    text-align:center;
    align-items: center;
`
export const NavbarA = styled.a`
    padding: 20px;
    text-decoration: none;
    color:white;
    &:hover{
        color:black;
        transition: 0.1s ease-out;
    }
`
export const NavbarPblue = styled.p`
    color: #2eb6fb;
    letter-spacing: 1px;
`

export const NavbarPblack = styled.p`
    color: white;
    letter-spacing: 1px;
`

import styled from 'styled-components';
// ` `

export const ExpContainer = styled.div`
  height: 1800px;
  max-width: 1640px;
  width: 100%;
  border-left: 1px solid black;
  justify-content: center;
  align-content: center;
  background-color: #f5f2eb;
  padding: 12px 120px 80px 80px;
  padding-left: 100px;
`;

export const MainContainer1 = styled.div`
  justify-content: center;
  display: flex;
`;

export const Container1 = styled.div`
  text-align: center;
  height: 35%;
`;

export const A1 = styled.a`
  border-radius: 5px;
  background-color: white;
  color: black;
  text-decoration: none;
  border: 1px solid black;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 5px;
  padding-bottom: 5px;

  transition: 0.1s ease-out;
  &:hover {
    background-color: #fafafa;
  }
`;

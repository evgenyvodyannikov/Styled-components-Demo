import React from "react";
import styled from "styled-components";
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
  color: white;
`;

const App = () => {
  return (
    <AppWrapper>
      <Flex justify='center'>
        <Title color="green">Test 123456</Title>
      </Flex>
      <Console color='green'/>
    </AppWrapper>
  );
};

export default App;

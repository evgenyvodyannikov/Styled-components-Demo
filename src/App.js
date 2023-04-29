import React from "react";
import styled from "styled-components";
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";

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
      <Flex justify="center">
        <Title color="violet">Test 123456</Title>
      </Flex>
      <Flex direction='column'>
        <Console color="violet" />
        <Button outlined color='violet' align='flex-end'>Test</Button>
      </Flex>
    </AppWrapper>
  );
};

export default App;

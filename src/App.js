import React from "react";
import styled from "styled-components";
import Title from "./components/Title";
import Flex from "./components/Flex";

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
    </AppWrapper>
  );
};

export default App;

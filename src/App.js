import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Parent = styled.div`
  width: 80%;
  background-color: teal;
`;
const Child = styled.div`
  font-size: 18px;
  text-align: center;
  height: 100px;
  box-sizing: border-box;
  color: white;
  background-color: dodgerblue;
  border: 1px solid black;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Parent>
          <Child>child 1</Child>
          <Child>child 2</Child>
          <Child>child 3</Child>
          <Child>child 4</Child>
          <Child>child 5</Child>
          <Child>child 6</Child>
        </Parent>
      </Container>
    </>
  );
}

export default App;

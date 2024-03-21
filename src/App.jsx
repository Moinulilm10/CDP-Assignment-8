import { Container, Stack } from "@mui/material";
// import Input from "./components/Input";
import Title from "./components/Title";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Container sx={{ padding: "3rem", margin: "auto" }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Title />
          {/* <Input /> */}
          <TodoList />
        </Stack>
      </Container>
    </>
  );
}

export default App;

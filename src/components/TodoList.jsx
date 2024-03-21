import { Stack, Typography } from "@mui/material";

const TodoList = () => {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex start"
      spacing={2}
    >
      <Typography variant="h4" component="h4">
        Todo List
      </Typography>
    </Stack>
  );
};

export default TodoList;

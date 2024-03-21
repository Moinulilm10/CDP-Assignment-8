import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import closeIcon from "../assets/icons/close.svg";
import editIcon from "../assets/icons/edit.svg";
import { taskRemove } from "../redux/features/todo/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.tasks);
  console.log("🚀 ~ Input ~ todos:", todos);
  const dispatch = useDispatch();

  const totalTaskLength = todos.length;

  // const tasks = todos.tasks.map((task) => (task.name, task.id));

  // console.log(tasks);

  const handleDeleteTask = (id) => {
    dispatch(taskRemove(id));
  };

  const handleEditTask = () => {
    console.log("edit task");
  };

  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex start"
        spacing={2}
      >
        <Divider>
          <Typography variant="h5" component="h5">
            Todo List
          </Typography>
        </Divider>

        <Stack direction="row" justifyContent="space-between">
          <Button color="primary" display="block">
            Complete All Task
          </Button>
          <Button color="primary" display="block">
            Clear All Task
          </Button>
        </Stack>

        <Container sx={{ backgroundColor: "#FAF9F6" }} maxWidth="lg">
          {totalTaskLength != 0 ? (
            <Table sx={{ minWidth: 850 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    ID
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Todo Task
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Task Status
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todos.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell align="center">{task.id}</TableCell>
                    <TableCell align="center">{task.name}</TableCell>
                    <TableCell align="center">
                      <Button>completed</Button>
                      <Button color="error">incomplete</Button>
                    </TableCell>
                    <TableCell align="center">
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Button onClick={handleEditTask} color="primary">
                          <img
                            height={25}
                            width={25}
                            src={editIcon}
                            alt="edit_icon"
                          />
                        </Button>
                        <Button
                          onClick={() => handleDeleteTask(task.id)}
                          color="error"
                        >
                          <img
                            height={25}
                            width={25}
                            src={closeIcon}
                            alt="close_icon"
                          />
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Typography variant="h6" component="h6">
              no task available right now !!!
            </Typography>
          )}
        </Container>
      </Stack>
    </>
  );
};

export default TodoList;

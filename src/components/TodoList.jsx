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
  TextField,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import closeIcon from "../assets/icons/close.svg";
import editIcon from "../assets/icons/edit.svg";
import TodoIcon from "../assets/icons/todolist.svg";

import { useState } from "react";
import {
  taskAdd,
  taskAllComplete,
  taskAllRemove,
  taskEdit,
  taskRemove,
  taskStatus,
} from "../redux/features/todo/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.tasks);
  console.log("🚀 ~ Input ~ todos:", todos);
  const dispatch = useDispatch();

  const totalTaskLength = todos.length;

  // const tasks = todos.tasks.map((task) => (task.name, task.id));

  // console.log(tasks);

  const handleToggleStatus = (id) => {
    dispatch(taskStatus(id));
  };

  const handleDeleteTask = (id) => {
    dispatch(taskRemove(id));
  };

  const handleRemoveAllTask = () => {
    dispatch(taskAllRemove());
  };

  const handleCompleteAllTask = () => {
    dispatch(taskAllComplete());
  };

  const [taskName, setTaskName] = useState("");
  const [editTask, setEditTask] = useState(null);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskName) {
      if (editTask !== null) {
        dispatch(taskEdit({ id: editTask, name: taskName }));
        setEditTask(null);
      } else {
        dispatch(taskAdd(taskName));
      }
      setTaskName("");
    }
  };

  const handleEditTask = (taskId, taskName) => {
    setEditTask(taskId);
    setTaskName(taskName);

    // take me to input filed with smooth scroll
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* input field  */}
      <Stack sx={{ paddingLeft: "12rem" }} spacing={3} direction="row">
        <img height={40} width={40} src={TodoIcon} alt="todo_icon" />
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "60ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Add your TODO"
            variant="standard"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </Box>
        <Box height={100} width={200} sx={{ p: 2.5 }}>
          <Button
            onClick={handleAddTask}
            sx={{ width: "14ch" }}
            variant="contained"
          >
            {editTask !== null ? "Edit" : "Add"}
          </Button>
        </Box>
      </Stack>

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
          <Button
            onClick={handleCompleteAllTask}
            color="primary"
            display="block"
          >
            Complete All Task
          </Button>
          <Button onClick={handleRemoveAllTask} color="primary" display="block">
            Delete All Task
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
                    <TableCell
                      style={{
                        textDecoration: task.status ? "line-through" : "none",
                      }}
                      align="center"
                    >
                      {task.id}
                    </TableCell>
                    <TableCell
                      style={{
                        textDecoration: task.status ? "line-through" : "none",
                      }}
                      align="center"
                    >
                      {task.name}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={() => handleToggleStatus(task.id)}
                        color={task.status ? "primary" : "error"}
                      >
                        {task.status ? "completed" : "incomplete"}
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          onClick={() => handleEditTask(task.id, task.name)}
                          color="primary"
                        >
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

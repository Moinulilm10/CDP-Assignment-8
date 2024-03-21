import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoIcon from "../assets/icons/todolist.svg";
import { taskAdd, taskEdit } from "../redux/features/todo/todoSlice";

// const Responsive = styled("Box")(({ theme }) => ({
//   [theme.breakpoints.up("mobile")]: {
//     width: "20ch",
//   },
//   [theme.breakpoints.up("tablet")]: {
//     width: "35ch",
//   },
//   [theme.breakpoints.up("desktop")]: {},
// }));

const Input = () => {
  const [taskName, setTaskName] = useState("");
  const [editTask, setEditTask] = useState(null);

  const todos = useSelector((state) => state.todos);
  console.log("🚀 ~ Input ~ todos:", todos);
  const dispatch = useDispatch();

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
  };

  return (
    <>
      {/* <Responsive> */}
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
      {/* </Responsive> */}
    </>
  );
};

export default Input;

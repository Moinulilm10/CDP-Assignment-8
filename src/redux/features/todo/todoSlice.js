import { createSlice } from "@reduxjs/toolkit";

const initialTodos = {
  tasks: [
    { id: 1, name: "Buy groceries", status: false },
    { id: 2, name: "Clean the kitchen", status: false },
    { id: 3, name: "Water the plants", status: false },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    taskAdd: (state, action) => {
      const newTodo = {
        id: Date.now(),
        name: action.payload,
        status: false,
      };
      state.tasks.push(newTodo);
    },
    taskRemove: (state, action) => {
      const index = state.tasks.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
    taskEdit: (state, action) => {},
    taskStatus: (state, action) => {
      const todo = state.tasks.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.status = !todo.status;
      }
    },
    taskAllRemove: (state) => {
      state.tasks = [];
    },
    taskAllComplete: (state) => {
      state.tasks.forEach((task) => {
        task.status = true;
      });
    },
  },
});

export const {
  taskAdd,
  taskRemove,
  taskEdit,
  taskStatus,
  taskAllRemove,
  taskAllComplete,
} = todoSlice.actions;

export default todoSlice.reducer;

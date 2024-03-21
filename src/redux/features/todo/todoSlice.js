import { createSlice } from "@reduxjs/toolkit";

const initialTodos = {
  books: [
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
        text: action.payload,
        status: false,
      };
      state.push(newTodo);
    },
    taskRemove: (state, action) => {},
    taskEdit: (state, action) => {},
    taskStatus: (state, action) => {},
  },
});

export const { taskAdd, taskRemove, taskEdit, taskStatus } = todoSlice.actions;

export default todoSlice.reducer;

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
  reducers: {},
});

// export const {} = todoSlice.actions;

export default todoSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodo {
  subject: string;
  task: string;
  id: number;
  complete: boolean;
}

type TodosState = {
  list: ITodo[];
};

const initialState: TodosState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string, string>) {
      state.list.push({
        subject: action.payload,
        task: action.payload,
        id: new Date().valueOf(),
        complete: false,
      });
    },

    toggleComplete(state, action: PayloadAction<number>) {
      const toggledTodo = state.list.find((todo) => todo.id === action.payload);
      if (toggledTodo) {
        toggledTodo.complete = !toggledTodo?.complete;
      }
    },

    deleteTodo(state, action: PayloadAction<number>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;

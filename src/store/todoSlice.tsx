import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITodo {
  subject: string;
  task: string;
  id: number;
  complete: boolean;
}

type TodosState = {
  list: ITodo[];
  sortedList: ITodo[];
};

const initialState: TodosState = {
  list: [
    { subject: "Математика", task: "Стр. 4 , упр. 36 а, б.", id: 1, complete: false },
    { subject: "Русский язык", task: "Учебник, стр. 4 , упр. 36 а, б.", id: 2, complete: true },
    { subject: "ИЗО", task: "Подготовить клей, ножницы, вл. салфетки, цветную бумагу, ножницы, шерстняые нитки", id: 3, complete: false },
    { subject: "Литература", task: "Учебник, стр. 4 , упр. 36 а, б.", id: 4, complete: true },
  ],

  sortedList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Array<string>>) {
      state.list.push({
        subject: action.payload[0],
        task: action.payload[1],
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

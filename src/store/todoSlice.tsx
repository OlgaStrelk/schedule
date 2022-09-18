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
    { subject: "RS", task: "дочитать теорию", id: 1, complete: false },
    { subject: "RS", task: "решить тест 1", id: 2, complete: false },
    { subject: "RS", task: "решить тест 2", id: 3, complete: false },
    { subject: "работа", task: "решить тестовое", id: 4, complete: false },
    { subject: "работа", task: "начать тудулист", id: 5, complete: true },
    { subject: "забота о себе", task: "позавтракать", id: 6, complete: true },
    { subject: "забота о себе", task: "выпить кофе", id: 7, complete: true },
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
    filterTodos(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case "complete":
          const completeArray = state.list.filter(
            (todo) => todo.complete === true
          );
          state.sortedList = completeArray;
          console.log(state.sortedList);
          break;
        case "uncomplete":
          const uncompleteArray = state.list.filter(
            (todo) => todo.complete !== true
          );
          state.sortedList = uncompleteArray;
          console.log(state.sortedList);
          break;
        case "all":
          state.sortedList = state.list;
          console.log(state.sortedList);
          break;
      }
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, filterTodos } = todoSlice.actions;

export default todoSlice.reducer;

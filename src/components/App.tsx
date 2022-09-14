import React from "react";
import "../styles/App.css";
import { FilterButton } from './FilterButton';
import { FilterPopup } from './FilterPopup';
import { TodoList } from './TodoList';

function App() {
  return (
    <main className='app'>
      <section className='app__filter'>
        <FilterButton />
      </section>
      <FilterPopup />
      <section className="app__tasks">
        <TodoList />
      </section>
    </main>
  );
}

export default App;

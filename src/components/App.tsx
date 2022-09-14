import React from "react";
import "../styles/App.css";
import { FilterButton } from './FilterButton';
import { FilterPopup } from './FilterPopup';

function App() {
  return (
    <main className='app'>
      <section className='app__filter'>
        <FilterButton />
      </section>
      <FilterPopup />
    </main>
  );
}

export default App;

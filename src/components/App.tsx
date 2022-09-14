import React from "react";
import "./App.css";
import { FilterButton } from './FilterButton';
import { FilterPopup } from './FilterPopup';

function App() {
  return (
    <>
      <section>
        <FilterButton />
      </section>
      <FilterPopup />
    </>
  );
}

export default App;

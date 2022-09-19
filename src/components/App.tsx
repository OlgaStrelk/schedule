import { AddTodoButton } from './AddTodoButton';
import { FilterButton } from './FilterButton';
import { FilterPopup } from './FilterPopup';
import { FormPopup } from './FormPopup';
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
        <AddTodoButton />
      </section>
      <FormPopup />
    </main>
  );
}

export default App;

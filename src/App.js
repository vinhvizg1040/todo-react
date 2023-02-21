import './App.css';
import TodoInput from './components/TodoInput';
import Todolist from './components/Todolist';

function App() {
  return (
    <>
      <div className='grid-template'>
        <TodoInput/>
        <Todolist/>
      </div>
    </>
  );
}

export default App;

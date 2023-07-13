import './App.css';
import CreateTask from './CreateTask';
import Header from './Header';

function App() {

  const addTask = (newTask) => {
    debugger;
  }
  return (
    <>
      <Header />
      <CreateTask onAdd={addTask} />
    </>
  )
}

export default App;

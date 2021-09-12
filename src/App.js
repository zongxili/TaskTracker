import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() { // root component

  const name = 'Zongxi';

  return (
    <div className="container">
      <Header title='Task Tracker' />
      <Tasks />
    </div>
  );
}

export default App;
import Header from "./components/Header";

function App() { // root component

  const name = 'Zongxi';

  return (
    <div className="container">
      <Header title='Task Tracker' />
    </div>
  );
}

export default App;
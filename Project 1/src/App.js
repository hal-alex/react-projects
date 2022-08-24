import logo from './logo.svg';
import './App.css';

function App() {

  const people = ["Alex", "Bob", "Alice"]

  return (
    <div className="App">
      {people.map((person, index) => {
        return (
          <>
            <h4 key={index}>{person}</h4>
          </>
        )
      })}
    </div>
  );
}

export default App;

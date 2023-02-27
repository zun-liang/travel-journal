import './App.css';
import data from "./data";
import Navbar from "./navbar";
import Journal from "./journal";

function App() {
  const journals = data.map(item => {
    return (
      <Journal
        key={item.title}
        item={item}
        />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {journals}
      </div>
    </div>
  );
}

export default App;

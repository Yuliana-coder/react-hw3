import './App.css';
import {Counter} from './components/counter/counter'

function App() {
  let countersTitile = {
    1: "This is first counter!",
    2: "This is second counter!"
  }
  return (
    <div>
      <div className="App-counter-wrapper">
        <Counter countersTitile={countersTitile} />
      </div>
    </div>
  );
}

export default App;

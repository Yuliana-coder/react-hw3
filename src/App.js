import './App.css';
import {Counter} from './components/counter/counter'

function App() {

  return (
    <div>
      <div className="App-counter-wrapper">
        <Counter startWith={0} title="This is first counter!" />
        <Counter startWith={10} title="This is second counter!" />
      </div>
    </div>
  );
}

export default App;

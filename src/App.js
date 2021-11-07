import './App.css';

import {useInput} from "./hooks/useInput";
import {Hover} from "./components/Hover";

function App() {
  const username = useInput('');

  return (
    <div className="App">
      <input type="text" {...username}/>
      <button onClick={() => console.log(username.value)}>send</button>
      <Hover/>
    </div>
  );
}

export default App;

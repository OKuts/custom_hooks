import './App.css';

import {useInput} from "./hooks/useInput";

function App() {
  const username = useInput('');

  return (
    <div className="App">
      <input type="text" {...username}/>
      <button onClick={() => console.log(username.value)}>send</button>
    </div>
  );
}

export default App;

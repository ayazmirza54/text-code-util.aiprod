import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [word, setWord] = useState('');
  const [cmd, setCmd] = useState('');
  const [response, setResponse] = useState('');

  const handleWordChange = event => {
    setWord(event.target.value);
  }

  const handleCmdChange = event => {
    setCmd(event.target.value);
  }

  const handleWordSubmit = async event => {
    event.preventDefault();
    const res = await fetch('http://localhost:3080/app1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ word: word }),
    });
    const data = await res.json();
    setResponse(data.result);
  }

  const handleCmdSubmit = async event => {
    event.preventDefault();
    const res = await fetch('http://localhost:3080/app2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cmd: cmd }),
    });
    const data = await res.json();
    setResponse(data.result);
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
          <li>
              <Link to="/app1">Explain a topic</Link>
            </li>
            <li>
              <Link to="/app2">Convert text to command</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/app1">
            <form onSubmit={handleWordSubmit}>
              <label>
                Word:
                <input type="text" value={word} onChange={handleWordChange} />
              </label>
              <button type="submit">Submit</button>
            </form>
            <p>{response}</p>
          </Route>
          <Route path="/app2">
            <form onSubmit={handleCmdSubmit}>
              <label>
                Command:
                <input type="text" value={cmd} onChange={handleCmdChange} />
              </label>
              <button type="submit">Submit</button>
            </form>
            <p>{response}</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
           

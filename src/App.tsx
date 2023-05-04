import React from 'react';
import {Hello} from './components/Hello'
import { Form } from './components/Form';

import './App.css';

function App() {
  const [serverData, setServerData] = React.useState([])

  React.useEffect(() => {
    fetch('http://34.204.7.152:4000')
    .then(res => res.json())
    .then(data => setServerData(data))
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Hello firstName='Sarah' lastName='Kuss' />
        <Form />
        {/* @ts-ignore */}
        {serverData && serverData.map(eachDog => <p>{eachDog.name}</p>)}
      </header>
    </div>
  );
}

export default App;

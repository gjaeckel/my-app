import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App1() {

  const [status, setStatus] = useState("Open");
  return (
    <>
      <h1>
        Status {status}
      </h1>
      <button onClick={() => setStatus("Open")}>Open</button>
      <button onClick={() => setStatus("Back in 5")}>Break</button>
      <button onClick={() => setStatus("Closed")}>Closed</button>
    </>
  );
}

function Checkbox() {
  const [checked, toggle] = useReducer(
    checked => !checked,
    false
  );
  // useEffect(() => {
  //   alert(`checked: ${checked.toString()}`);
  // });
  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  );

}

function GitHubUser({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error)
  }, []);

  if (data) {
    return (
      <div>
        <h1>{data.login}</h1>
      </div>
    )
  }
  return null;
}

function App3() {
  return <GitHubUser login="gjaeckel" />;
}



ReactDOM.render(
  <Checkbox />,
  document.getElementById('root')
);



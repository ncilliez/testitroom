import './App.css';

import { useEffect, useState } from "react";

const lang = 'french';
const url = `https://restcountries.com/v3.1/lang/${lang}`;

function App() {
  const [table, setTable] = useState([]);
  // const [selection, setSelection] = useState('french');

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {

        setTable(data);

      })
      .catch(function(error) {
        console.log(error);
      });

  }, []);

  

  const select =()=>{
    var info = document.getElementById('filtre').value
    console.log(info)
  };
  console.log(table);
  return (
    <div>
      <input type="text" id="filtre"/>
      <button onClick ={() => select()}>Valider</button>
      
      <ul>
        {table.map((pays, i) => {
          return (
            <li key={i}>{pays.name.common}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;

import './App.css';

import { useEffect, useState } from "react";

function App() {

  const [table, setTable] = useState([]);
  const [lang, setLang] = useState('french');

  
  
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/lang/${lang}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {

        setTable(data);

      })
      .catch(function(error) {
        console.log(error);
      });

  }, [lang]);

  const select =()=>{
    let demande = document.getElementById('filtre').value
    console.log(demande);
    setLang(demande)
  };
  
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

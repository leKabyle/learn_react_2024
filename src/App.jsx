import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import './App.css'
import Maliste from './composants/Maliste'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <h1>Mes listes</h1>
          <Maliste text="Apprendre Ract"/>
          <Maliste text="Maitriser React" />
          <Maliste text="Explorer le cours complet de Ract" />
          
      </div>
    </>
  );
};

export default App;

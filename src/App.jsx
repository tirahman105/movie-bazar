import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="m-auto">

      <Header></Header>
      <Home></Home>
      
      
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Test, Test2 } from './component/Test'
import Cv from './component/Cv/Cv'
// import { set } from 'date-fns';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Cv/>
    </>
  )
}

export default App

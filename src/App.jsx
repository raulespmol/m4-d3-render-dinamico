import { useState } from 'react'
import './App.css'
import { BaseColaboradores } from './BaseColaboradores'
import Formulario from './components/Formulario'
import { Listado } from './components/Listado'

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  return (
    <>
      <Listado data={colaboradores}/>
      <Formulario setColaboradores={setColaboradores} colaboradores={colaboradores}/>
    </>
  )
}

export default App

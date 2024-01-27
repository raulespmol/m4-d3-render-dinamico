import { useState } from 'react'
import { BaseColaboradores } from './BaseColaboradores'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Alerta from './components/Alerta'
import './App.css'

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [alert, setAlert] = useState({msg: '', color: ''})
  return (
    <>
      <Listado data={colaboradores}/>
      <Formulario 
        colaboradores={colaboradores}
        setColaboradores={setColaboradores} 
        setAlert={setAlert}
      />
      <Alerta msg={alert.msg} color={alert.color}/>
    </>
  )
}

export default App

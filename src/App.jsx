import './App.css'
import { BaseColaboradores } from './BaseColaboradores'
import Formulario from './components/Formulario'
import { Listado } from './components/Listado'

function App() {
  return (
    <>
      <Listado data={BaseColaboradores}/>
      <Formulario data={BaseColaboradores}/>
    </>
  )
}

export default App

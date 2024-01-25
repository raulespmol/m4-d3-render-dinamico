import './App.css'
import { BaseColaboradores } from './BaseColaboradores'
import { Listado } from './components/Listado'

function App() {
  return (
    <>
      <Listado data={BaseColaboradores}/>
    </>
  )
}

export default App

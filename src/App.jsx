import { useState } from 'react'
import { BaseColaboradores } from './BaseColaboradores'

import { Container, Row, Col } from 'react-bootstrap'

import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Alerta from './components/Alerta'
import Buscador from './components/Buscador'

import './App.css'

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [alert, setAlert] = useState({msg: '', color: ''})
  const [search, setSearch] = useState('')

  const handleSearch = e => {
    e.preventDefault()
    setSearch(e.target.value)  
  }

  const dataFiltered = colaboradores.filter((colaborador) => {
    const {nombre, correo, edad, cargo, telefono} = colaborador
    const searchFilter = search.toLowerCase()
    return (
      nombre.toLowerCase().includes(searchFilter) ||
      correo.toLowerCase().includes(searchFilter) ||
      edad.toLowerCase().includes(searchFilter) ||
      cargo.toLowerCase().includes(searchFilter) ||
      telefono.toLowerCase().includes(searchFilter)
      );
    })
  
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <h2>Lista de Colaboradores</h2> 
          <Buscador 
            filter={search}
            onChange={handleSearch}
          />
          <Listado data={dataFiltered}/>
        </Col>
        <Col lg={4}>
          <h2>Agregar Colaborador</h2>
          <Formulario 
            colaboradores={colaboradores}
            setColaboradores={setColaboradores} 
            setAlert={setAlert}
          />
          <Alerta
            msg={alert.msg}
            color={alert.color}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default App

import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css'

const Formulario = () => {
  const [nombre, setNombre] = useState('') 
  const [correo, setCorreo] = useState('') 
  const [edad, setEdad] = useState('') 
  const [cargo, setCargo] = useState('') 
  const [telefono, setTelefono] = useState('') 

  const validateForm = e => {
    e.preventDefault()
    if(!nombre || !correo || !edad || !cargo || !telefono){
      //ALERTA COMPLETA LOS CAMPOS
      console.log('hay campos vacios');
      return
    }

    const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(!correo.match(mailRegex)){
      //ALERTA FORMATO CORREO
      console.log('formato correo incorrecto');
      return
    }

    if(parseInt(edad) <= 18){
      //ALERTA MENOR EDAD
      console.log('no se permiten menores de edad');
      return
    }

    
    
    //ALERTA INGRESO EXITOSO
    setNombre('')
    setCorreo('')
    setEdad('')
    setCargo('')
    setTelefono('')
  }

  const handleNombre = e => setNombre(e.target.value)
  const handleCorreo = e => setCorreo(e.target.value)
  const handleEdad = e => setEdad(e.target.value)
  const handleCargo = e => setCargo(e.target.value)
  const handleTelefono = e => setTelefono(e.target.value)

  return (
    <Form onSubmit={validateForm}>
      <h2>Agregar Colaborador</h2>
      <Form.Control 
        placeholder="Nombre"
        type="text" 
        name="nombre"
        value={nombre}
        autoComplete="false"
        onChange={handleNombre}
      />
      <Form.Control 
        placeholder="Correo"
        type="text" 
        name="correo"
        value={correo}
        onChange={handleCorreo}
      />
      <Form.Control 
        placeholder="Edad"
        type="number"
        min={1}
        name="edad"
        value={edad}
        onChange={handleEdad}
      />
      <Form.Control 
        placeholder="Cargo"
        type="text"
        name="cargo"
        value={cargo}
        onChange={handleCargo}
      />
      <Form.Control 
        placeholder="Telefono"
        type="tel"
        name="telefono"
        value={telefono}
        onChange={handleTelefono}
      />
      <Button variant="primary" type="submit">
        Agregar
      </Button>
    </Form>
  )
}

export default Formulario
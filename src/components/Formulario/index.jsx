import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css'

const Formulario = ({data}) => {
  // const [nombre, setNombre] = useState('') 
  // const [correo, setCorreo] = useState('') 
  // const [edad, setEdad] = useState('') 
  // const [cargo, setCargo] = useState('') 
  // const [telefono, setTelefono] = useState('') 

  const [colaborador, setColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  })

  const validateForm = e => {
    e.preventDefault()
    const {nombre, correo, edad, cargo, telefono} = colaborador
     if(!nombre || !correo || !edad || !cargo || !telefono){
      //ALERTA COMPLETA LOS CAMPOS
      console.log('hay campos vacios');
      return
    }
    /*
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
    setColaborador({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  }) */
  }

  const handleChange = (dato, valor) => {
    setColaborador(datosPrevios => ({
      ...datosPrevios,
      [dato]: valor
      })
    );
  }

  return (
    <Form onSubmit={validateForm}>
      <h2>Agregar Colaborador</h2>
      <Form.Control 
        placeholder="Nombre"
        type="text" 
        name="nombre"
        value={colaborador.nombre}
        autoComplete="false"
        onChange={e => handleChange('nombre', e.target.value)}
      />
      <Form.Control 
        placeholder="Correo"
        type="text" 
        name="correo"
        value={colaborador.correo}
        onChange={e => handleChange('correo', e.target.value)}
      />
      <Form.Control 
        placeholder="Edad"
        type="number"
        min={1}
        name="edad"
        value={colaborador.edad}
        onChange={e => handleChange('edad', e.target.value)}
      />
      <Form.Control 
        placeholder="Cargo"
        type="text"
        name="cargo"
        value={colaborador.cargo}
        onChange={e => handleChange('cargo', e.target.value)}
      />
      <Form.Control 
        placeholder="Telefono"
        type="tel"
        name="telefono"
        value={colaborador.telefono}
        onChange={e => handleChange('telefono', e.target.value)}
      />
      <Button variant="primary" type="submit">
        Agregar
      </Button>
    </Form>
  )
}

export default Formulario
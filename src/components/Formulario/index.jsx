import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css'

const Formulario = ({colaboradores, setColaboradores, setAlert}) => {
  const [colaboradorNuevo, setColaboradorNuevo] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  })

  const validateForm = () => {
    const {nombre, correo, edad, cargo, telefono} = colaboradorNuevo

     if(!nombre || !correo || !edad || !cargo || !telefono){
      setAlert({msg: 'Completa todos los campos', color: 'danger'})
      return
    }
    
    const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(!correo.match(mailRegex)){
      setAlert({msg: 'Formato de correo incorrecto', color: 'danger'})
      return
    }

    if(parseInt(edad) < 18){
      setAlert({msg: 'No puedes registrar menores de edad', color: 'danger'})
      return
    }

    if(telefono.length != 8){
      setAlert({msg: 'Ingresa un número de teléfono de 8 dígitos', color: 'danger'})
      return
    }

    return true
  }

  const addColaborador = () => {
    setColaboradores([...colaboradores, colaboradorNuevo])
    setColaboradorNuevo({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: ''
    })
    setAlert({msg: 'Colaborador ingresado correctamente', color: 'success'})
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    if(validateForm()){
      addColaborador()
    }
  }

  const handleChange = (dato, valor) => {
    setColaboradorNuevo(datosPrevios => ({
      ...datosPrevios,
      [dato]: valor
      })
    );
  }


  return (
    <Form onSubmit={handleSubmit}>
      <h2>Agregar Colaborador</h2>
      <Form.Control 
        placeholder="Nombre"
        type="text" 
        name="nombre"
        value={colaboradorNuevo.nombre}
        autoComplete="false"
        onChange={e => handleChange('nombre', e.target.value)}
      />
      <Form.Control 
        placeholder="Correo"
        type="text" 
        name="correo"
        value={colaboradorNuevo.correo}
        onChange={e => handleChange('correo', e.target.value)}
      />
      <Form.Control 
        placeholder="Edad"
        type="number"
        min={1}
        name="edad"
        value={colaboradorNuevo.edad}
        onChange={e => handleChange('edad', e.target.value)}
      />
      <Form.Control 
        placeholder="Cargo"
        type="text"
        name="cargo"
        value={colaboradorNuevo.cargo}
        onChange={e => handleChange('cargo', e.target.value)}
      />
      <Form.Control 
        placeholder="Telefono"
        type=""
        name="telefono"
        value={colaboradorNuevo.telefono}
        onChange={e => handleChange('telefono', e.target.value)}
      />
      <Button variant="primary" type="submit">
        Agregar
      </Button>
    </Form>
  )
}

export default Formulario
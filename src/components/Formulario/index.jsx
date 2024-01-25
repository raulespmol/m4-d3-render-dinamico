import { useState } from "react"

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
      return
    }

    const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(!correo.match(mailRegex)){
      //ALERTA FORMATO CORREO
      return
    }

    if(parseInt(edad) <= 18){
      //ALERTA MENOR EDAD
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
    <form onSubmit={validateForm}>
      <input 
        placeholder="Nombre"
        type="text" 
        name="nombre"
        value={nombre}
        autoComplete="false"
        onChange={handleNombre}
      />
      <input 
        placeholder="ejemplo@correo.cl"
        type="text" 
        name="correo"
        value={correo}
        onChange={handleCorreo}
      />
      <input 
        placeholder="Edad"
        type="text"
        name="edad"
        value={edad}
        onChange={handleEdad}
      />
      <input 
        placeholder="Cargo"
        type="text"
        name="cargo"
        value={cargo}
        onChange={handleCargo}
      />
      <input 
        placeholder="Telefono"
        type="tel"
        name="telefono"
        value={telefono}
        onChange={handleTelefono}
      />
      <button type="submit">Registrarse</button>
    </form>
  )
}

export default Formulario
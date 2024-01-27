import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Buscador = ({data, setFilter}) => {
  const [search, setSearch] = useState('')

  const handleChange = e => {
    e.preventDefault()
    setSearch(e.target.value)
    
    const dataFiltered = data.filter((colaborador) => {
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

    setFilter(dataFiltered)
    }
    

  return (
    <Form.Control 
      placeholder="Buscar"
      type="text" 
      name="search"
      autoComplete="false"
      value={search}
      onChange={e => handleChange(e)}
    />
  )
}

export default Buscador
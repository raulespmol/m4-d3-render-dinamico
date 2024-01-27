import Form from 'react-bootstrap/Form';

const Buscador = ({filter, onChange}) => {

  return (
    <Form.Control 
      placeholder="Buscar"
      type="text" 
      name="search"
      autoComplete="false"
      value={filter}
      onChange={onChange}
    />
  )
}

export default Buscador
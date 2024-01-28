import Form from 'react-bootstrap/Form';
import './index.css'

const Buscador = ({filter, onChange}) => {

  return (
    <Form.Control className='mb-3'
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
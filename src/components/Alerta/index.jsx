import Alert from 'react-bootstrap/Alert';
import './index.css'

const Alerta = ({msg, color}) => {
  return (
    <Alert variant={color}>
      {msg}
    </Alert>
  )
}

export default Alerta
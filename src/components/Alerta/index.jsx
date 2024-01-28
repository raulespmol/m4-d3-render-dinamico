import Alert from 'react-bootstrap/Alert';

const Alerta = ({msg, color}) => {
  return (
    <>
      {msg.length ? (
        <Alert variant={color}>
          {msg}
        </Alert>
      ) : (
        null
      )}
    </>
  )
}

export default Alerta
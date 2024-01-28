import Table from 'react-bootstrap/Table';
import './index.css'

const Listado = ({data}) => {
  return (        
    <Table bordered hover size='sm' responsive={'sm'}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {data.map((colaborador) => {
          const {id, nombre, correo, edad, cargo, telefono} = colaborador
          return (
            <tr key={id}>
              <td>{nombre}</td>
              <td>{correo}</td>
              <td>{edad}</td>
              <td>{cargo}</td>
              <td>{telefono}</td>
            </tr>
          )}
          )}
      </tbody>
    </Table>
  )
}

export default Listado
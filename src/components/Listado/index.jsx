import Table from 'react-bootstrap/Table';

const Listado = ({data}) => {
  return (        
    <Table bordered hover>
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
        {data.map((colaborador, index) => {
          const {nombre, correo, edad, cargo, telefono} = colaborador
          return (
            <tr key={index}>
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
import Table from 'react-bootstrap/Table';
import './index.css'

const Listado = ({data}) => {
  return (        
    <Table bordered hover size='sm' responsive className='w-100'>
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
        {data.length ? (
          data.map(colaborador => {
            const {id, nombre, correo, edad, cargo, telefono} = colaborador
            return (
              <tr key={id}>
                <td>{nombre}</td>
                <td>{correo}</td>
                <td>{edad}</td>
                <td>{cargo}</td>
                <td>{telefono}</td>
              </tr>
            )
          })
          ) : (
            <tr>
              <td colSpan={5}>
                No se encontraron coincidencias
              </td>
            </tr>
          )
        }
      </tbody>
    </Table>
  )
}

export default Listado
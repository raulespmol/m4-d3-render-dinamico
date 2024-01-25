import Table from 'react-bootstrap/Table';

export const Listado = ({data}) => {
  const handleData = (data) => {
    data.map(colaborador)
  }

  return (
    <Table striped bordered hover>
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
        <tr>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}
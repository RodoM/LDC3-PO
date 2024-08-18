import PropTypes from 'prop-types';

const Table = ({data}) => {
  return(
    <table>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Ingreso neto</th>
        </tr>
      </thead>
      <tbody>
        {data.map((x, i) => {
          return(
            <tr key={i}>
              <td>{x.brand}</td>
              <td>${x.income}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.array,
};

export default Table;
import React from 'react'

const CrudTableRow = ({ el, setDataEdit, deleteData }) => {

  let {name, constellation, id} = el;

  return (
    <div>
      <tr>
        <td>{name}</td>
        <td>{constellation}</td>
          <td>
            <button
              onClick={() => setDataEdit(el)}
            >Editar
            </button>

            <button
              onClick={() => deleteData(id)}
            >Eliminar
            </button>
          </td>
      </tr>
    </div>
  )
}

export default CrudTableRow

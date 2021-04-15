import React, {useState} from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'



const CrudApi = () => {

  const [db, setDb] = useState([]);
  const [dataEdit, setDataEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el);
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`Deseas eliminar el registro ${id}`);

    if(isDelete) {
      let newData = db.filter(el => el.id !== id);
      setDb(newData);
    }else{
      return;
    }
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />
        <CrudTable
          data={db}
          setDataEdit={setDataEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  )
}

export default CrudApi


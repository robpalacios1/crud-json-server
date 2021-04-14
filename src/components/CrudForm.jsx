import React, {useState, useEffect} from 'react'

const initialForm = {
  name: "",
  constellation: "",
  id: null,
}

const CrudForm = ({ createData, updateData, dataEdit, setDataEdit }) => {

  const[form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]:event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!form.name || !form.constellation) {
      alert("Datos incompletos, por favor llenar");
      return;
    }

    if(form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  }

  const handleReset = (event) => {
    setForm(initialForm);
    setDataEdit(null);
  }

  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit = {handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="constellation"
          placeholder="Constelacion"
          onChange={handleChange}
          value={form.constellation}
        />
        <input
          type="submit"
          value="Enviar"
        />
        <input
          type="reset"
          value="Limpiar"
          onClick={handleReset}
        />
      </form>
    </div>
  )
}

export default CrudForm

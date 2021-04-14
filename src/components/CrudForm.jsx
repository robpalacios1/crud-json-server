import React, {useState, useEffect} from 'react'

const initialForm = {
  name: "",
  constellations: "",
  id: null,
}

const CrudForm = () => {

  const[form, setForm] = useState(initialForm);

  const handleChange = (event) => {}
  const handleSubmit = (event) => {}
  const handleReset = (event) => {}

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
          value={form.constellations}
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

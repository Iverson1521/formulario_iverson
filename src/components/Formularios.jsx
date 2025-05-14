// import React from 'react'

// const Formularios = () => {
//     const [nombre, setNombre] = React.useState('')
//     const [apellido, setApellido] = React.useState('')
//     const [correo, setCorreo] = React.useState('')
//     const [lista, setLista] = React.useState([])
//     const [editIndex, setEditIndex] = React.useState(null)
//     const registrar = (e) => {
//         e.preventDefault()
//         if(!nombre) return alert('Ingrese un nombre')
//         if(!apellido) return alert('Ingrese su apellido')
//         if(!correo) return alert('Ingrese su correo')
//         if(!correo.includes('@')) return alert('Ingrese un correo valido')
        
//             setLista([
//                 ...lista, {nombre, apellido, correo}
//             ])
//             e.target.reset()
//             setNombre('')
//             setApellido('')
//             setCorreo('')                           
//         alert('Usuario registrado')
//     }
//   return (
//     <div>
//         <h1>Hola</h1>
//         <h2>Formulario de Registro</h2>
//         <form onSubmit={registrar}>
//             <input type="text"  placeholder='Ingrese su nombre'
//             className="form-control mb-3"
//             onChange={(e) => setNombre(e.target.value)}
//             />
//             <input type="text"  placeholder='Ingrese su apellido'
//             className="form-control mb-3"
//             onChange={(e) => setApellido(e.target.value)}
//             />        
//             <input type="email"  placeholder='Ingrese su correo'
//             className="form-control mb-3"
//             onChange={(e) => setCorreo(e.target.value)}
//             />
//             <div className='d-grid gap-2'>
//                 <button type="submit" className="btn btn-primary">Registrar</button>
//             </div>
            
//         </form>
//         <h2>Lista de Usuarios</h2>
//         <ul className='list-group'>
//             {
//                  lista.map((user, index) => (
//                 <li className='list-group-item' key={index}>
//                     {user.nombre} {user.apellido} - {user.correo}

//                     <button className='btn btn-danger float-end' onClick={() => {
//                         const newList = lista.filter((_, i) => i !== index)
//                         setLista(newList)
//                     }}>Eliminar</button>

//                     <button className='btn btn-warning float-end mx-2' onClick={() => {
//                         setNombre(user.nombre)
//                         setApellido(user.apellido)
//                         setCorreo(user.correo)
//                         setEditIndex(index)
//                     }}>Editar</button>

                    

//                 </li>
//             ))
//             }
           
//         </ul>
//     </div>  
//   )  
// }

// export default Formularios

import React from 'react'

const Formularios = () => {
  const [nombre, setNombre] = React.useState('')
  const [apellido, setApellido] = React.useState('')
  const [correo, setCorreo] = React.useState('')
  const [lista, setLista] = React.useState([])
  const [busqueda, setBusqueda] = React.useState('')
  const [editIndex, setEditIndex] = React.useState(null) // 👉 para saber si se está editando

  const registrar = (e) => {
    e.preventDefault()
    if (!nombre) return alert('Ingrese un nombre')
    if (!apellido) return alert('Ingrese su apellido')
    if (!correo) return alert('Ingrese su correo')
    if (!correo.includes('@')) return alert('Ingrese un correo válido')

    if (editIndex !== null) {
      // Actualizar usuario existente
      const nuevaLista = [...lista]
      nuevaLista[editIndex] = { nombre, apellido, correo }
      setLista(nuevaLista)
      alert('Usuario actualizado')
      setEditIndex(null)
    } else {
      // Registrar nuevo usuario
      setLista([...lista, { nombre, apellido, correo }])
      alert('Usuario registrado')
    }

    // Limpiar los campos
    setNombre('')
    setApellido('')
    setCorreo('')
  }

  const listaFiltrada = lista.filter(user =>
    user.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className='container'>
      <h1 className='my-4'>Gestión de Usuarios</h1>

      <h2>Formulario de Registro</h2>
      <form onSubmit={registrar}>
        <input
          type="text"
          placeholder='Ingrese su nombre'
          className="form-control mb-2"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder='Ingrese su apellido'
          className="form-control mb-2"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <input
          type="email"
          placeholder='Ingrese su correo'
          className="form-control mb-2"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <div className='d-grid gap-2 mb-4'>
          <button type="submit" className="btn btn-primary">
            {editIndex !== null ? 'Actualizar' : 'Registrar'}
          </button>
        </div>
      </form>

      <h2>Buscar Usuario</h2>
      <input
        type="text"
        placeholder="Buscar por nombre"
        className="form-control mb-3"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <h2>Lista de Usuarios</h2>
      <ul className='list-group'>
        {listaFiltrada.length === 0 && (
          <li className='list-group-item'>No hay usuarios registrados</li>
        )}
        {listaFiltrada.map((user, index) => (
          <li className='list-group-item' key={index}>
            {user.nombre} {user.apellido} - {user.correo}
            <button
              className='btn btn-danger float-end'
              onClick={() => {
                const nuevaLista = lista.filter((_, i) => i !== index)
                setLista(nuevaLista)
                if (editIndex === index) {
                  setEditIndex(null)
                  setNombre('')
                  setApellido('')
                  setCorreo('')
                }
              }}
            >
              Eliminar
            </button>
            <button
              className='btn btn-warning float-end mx-2'
              onClick={() => {
                setNombre(user.nombre)
                setApellido(user.apellido)
                setCorreo(user.correo)
                setEditIndex(index)
              }}
            >
              Editar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Formularios

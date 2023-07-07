const content = document.querySelector('#content')
const valores = window.location.search
const urlParams = new URLSearchParams(valores)
const id_todo = urlParams.get('id')
const title = document.querySelector('#titulo')
const btnEliminar = document.querySelector('#btnEliminar')


const ObtenerInfoTodo = () => {
    const request = new Request(`/todos/${id_todo}`, {
        method: 'get',
    })
    fetch(request)
    .then(res => res.json())
    .then( data => {
        const titulo = document.createElement('h2')
        titulo.textContent = data[0].nombreTarea
        title.textContent = data[0].nombreTarea
        titulo.classList.add('tituloTodo')
        content.appendChild(titulo)
        const estado = document.createElement('p')
        estado.innerHTML = `<label>Estado: </label><strong>${data[0].estado}</strong>`
        estado.classList.add('estadoTodo')
        content.appendChild(estado)
        const informacion = document.createElement('p')
        informacion.textContent = data[0].informacion
        informacion.classList.add('informacionTodo')
        content.appendChild(informacion)
        const btnModificar = document.createElement('a')
        btnModificar.href = `/modificarTodo?id=${id_todo}`
        btnModificar.textContent = "Modificar Todo"
        btnModificar.classList.add('boton')
        content.appendChild(btnModificar)
    })
    .catch(err => console.log(err))
}

ObtenerInfoTodo()

const EliminarTodo = () => {
    const request = new Request(`/todos/${id_todo}`, {
        method: 'DELETE'
    })
    fetch(request)
    .then(res => {
        window.location.href = res.url
    })
    .catch(err => console.log(err))
}

btnEliminar.addEventListener('click', EliminarTodo)
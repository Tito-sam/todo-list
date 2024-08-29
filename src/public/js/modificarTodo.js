const btnModificar = document.querySelector("#btnModificarTodo")
const nombreTarea = document.querySelector('#nombre')
const informacion = document.querySelector('#info')
const estado = document.querySelector('#estado')
const valores = window.location.search
const urlParams = new URLSearchParams(valores)
const id_todo = urlParams.get('id')

 
const modificarTodo = () => {
    let nombreEstado;
    if (estado.value == '1') {
        alert(estado.value);
        nombreEstado = "Sin Comenzar";
    } else if (estado.value == '2') {
        nombreEstado = "En progreso";
    } else {
        nombreEstado = "Finalizado";
    }       
    let data = {
        nombre : nombreTarea.value == '' ? null : `${nombreTarea.value}`,
        estado : estado.value == '' ? null: `${nombreEstado}`,
        info : informacion.value == '' ? null : `${informacion.value}`,
        id: id_todo
    }
    data = JSON.stringify(data)
    const request = new Request(`/todos/${id_todo}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    })
    fetch(request)
    .then((res) => {
        window.location.href = res.url
    })
    .catch( err => console.log(err))
}
btnModificar.addEventListener('click', modificarTodo)

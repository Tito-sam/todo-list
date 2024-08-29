const btnAgregar = document.querySelector("#btnAgregarTodo")
const nombreTarea = document.querySelector('#nombre')
const informacion = document.querySelector('#info')
const estado = document.querySelector('#estado')


const CrearTodo = () => {
    let nombreEstado;
    if (estado.value == '1') {
        alert(estado.value);
        nombreEstado = "Sin Comenzar";
    } else if (estado.value == '2') {
        nombreEstado = "En progreso";
    } else {
        nombreEstado = "Finalizado";
    }  
    let data = `{
        "nombre" : "${nombreTarea.value}",
        "estado" : "${estado.value}",
        "info" : "${informacion.value}"
    }`
    data = JSON.stringify(JSON.parse(data))
    const request = new Request('/todos', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    })
    fetch(request)
    .then((res) => {
        if(res.ok) {
            window.location.href = res.url
        } else {
            return res.json()
        }
    })
    .then((data) => console.log(data))
    .catch( err => console.log(err))
}
btnAgregar.addEventListener('click', CrearTodo)

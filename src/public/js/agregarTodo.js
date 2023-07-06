const btnAgregar = document.querySelector("#btnAgregarTodo")
const nombreTarea = document.querySelector('#nombre')
const informacion = document.querySelector('#info')
const estado = document.querySelector('#estado')


console.log(btnAgregar, nombreTarea, informacion, estado)


const CrearTodo = () => {
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
    .catch( err => console.log(err))
}
btnAgregar.addEventListener('click', CrearTodo)

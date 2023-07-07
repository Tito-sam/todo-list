listaTodos = document.querySelector(".lista-todos")

const limpiarLista = () => {
    while(listaTodos.firstChild) {
        listaTodos.removeChild(listaTodos.firstChild)
    }
}

const obtenerTodos = () => {
    const request = new Request(`/todos`, {
        method: "get"
    })
    fetch(request)
    .then(res => res.json())
    .then(data => {
        if (data.length > 0) {
            limpiarLista()
            
            for (let i = 0; i < data.length; i++) {
                const li = document.createElement('li')
                li.innerHTML = `
                <i class="todo">
                <a href="/infoTodo?id=${data[i].id}" class="todoLink">${data[i].nombreTarea}</a>
                </i>
                `
                listaTodos.appendChild(li)
            }            
            console.log(data)
        }
    })
}

obtenerTodos()


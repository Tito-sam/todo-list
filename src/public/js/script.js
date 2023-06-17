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
                const div = document.createElement('div')
                div.innerHTML = `
                <i class="todo">
                <a href="#" class="todoLink">${data[i].nombreTarea}</a>
                </i>
                `
                listaTodos.appendChild(div)
            }            
            console.log(data)
        }
    })
}

obtenerTodos()


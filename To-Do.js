let boton = document.querySelector("#btn-ag")
let ul = document.querySelector("ul")
let texto = document.querySelector("#text-input")
let filtro = document.querySelector("#filtro")

let tareas = []

const agregar = (event) => {
    event.preventDefault()

    let nuevaTarea = {
        texto: texto.value,
        isCompleted:false,
    }

    let li = document.createElement("li")
    li.classList.add("list-unstyled")
    ul.appendChild(li)
    let div = document.createElement("div")
    div.classList.add("form-control")
    let input = document.createElement("input")
    input.disabled = true 
    input.value = nuevaTarea.texto
    input.classList.add("rounded")
    let boton1 = document.createElement("button")
    boton1.classList.add("btn","btn-danger", "mx-2", "my-3", "my-md-0")
    boton1.innerText = " ✖️ Eliminar"
    let boton2 = document.createElement("button")
    boton2.innerText = " ✔️ Completo"
    boton2.classList.add("btn","btn-dark", "mx-2","my-3", "my-md-0")
    li.appendChild(div)
    div.appendChild(input)
    div.appendChild(boton1)
    div.appendChild(boton2)

    boton1.addEventListener("click",(event)=>{
        ul.removeChild(li)
        tareas = tareas.filter(item => item.texto != event.target.previousElementSibling.value)
        console.log(tareas)
    })

    boton2.addEventListener("click", (event)=>{
        event.preventDefault()
        input.classList.add("text-decoration-line-through")
        tareas = tareas.map(item =>{
            if(item.texto == event.target.previousElementSibling.previousElementSibling.value){
                item.isCompleted = true;
            }
            return item;
        })
        console.log(tareas)
    })

    tareas.push(nuevaTarea)
    console.log(tareas)
}

boton.addEventListener("click", (event) => {
    agregar(event)
})

texto.addEventListener("keydown",(event)=>{
    if(event.key == "Enter"){
        agregar(event)
    }
})

const filtroTareas = (value) => {
    let filtro = []
    if(value == "Pendiente"){
        filtro = tareas.filter(item => item.isCompleted == false)
    }else if(value == "Completado"){
        filtro = tareas.filter(item => item.isCompleted == true)
    }else{
        filtro = tareas
    }

    ul.innerHTML = "" 
    filtro.forEach(item => {
        let li = document.createElement("li")
        li.classList.add("list-unstyled")
        ul.appendChild(li)
        let div = document.createElement("div")
        div.classList.add("form-control")
        let input = document.createElement("input")
        input.disabled = true 
        input.value = item.texto
        input.classList.add("rounded")
        let boton1 = document.createElement("button")
        boton1.classList.add("btn","btn-danger", "mx-2", "my-3", "my-md-0")
        boton1.innerText = " ✖️ Eliminar"
        let boton2 = document.createElement("button")
        boton2.innerText = " ✔️ Completo"
        boton2.classList.add("btn","btn-dark", "mx-2","my-3", "my-md-0")
        li.appendChild(div)
        div.appendChild(input)
        div.appendChild(boton1)
        div.appendChild(boton2)
    })
    console.log(filtro)
}

filtro.addEventListener("change",(event) =>{
    filtroTareas(event.target.value)
})




    
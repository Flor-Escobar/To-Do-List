let boton = document.querySelector("#btn-ag")
let ul = document.querySelector("ul")
let texto = document.querySelector("#text-input")

const agregar = (event) => {
    event.preventDefault()//Detiene el evento pir defecto en este caso el de "form" que hace que recargue la página, entonces ese evento lo previene.

    //creación de li
    let li = document.createElement("li")
    li.classList.add("list-unstyled")
    ul.appendChild(li)
    //creación de div
    let div = document.createElement("div")
    //agregar la clase
    div.classList.add("form-control")
    //Creando el input
    let input = document.createElement("input")
    input.disabled = true // Los input que se van creando están desactivados
    input.value = texto.value//el input tiene el valor de lo que se agregó en el input principal
    let boton1 = document.createElement("button")
    boton1.classList.add("btn","btn-danger", "mx-2")
    boton1.innerText = "Eliminar"
    let boton2 = document.createElement("button")
    boton2.innerText = "Completo"
    boton2.classList.add("btn","btn-dark", "mx-2")
    li.appendChild(div)
    div.appendChild(input)
    div.appendChild(boton1)
    div.appendChild(boton2)

    boton1.addEventListener("click",(event)=>{
        ul.removeChild(li)
    })

    boton2.addEventListener("click", (event)=>{
        event.preventDefault()
        input.classList.add("text-decoration-line-through")
    })
}

boton.addEventListener("click", (event) => {
    agregar(event)
})

texto.addEventListener("keydown",(event)=>{
    if(event.key == "Enter"){
        agregar(event)
    }
})





    
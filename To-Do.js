let boton = document.querySelector("#btn-ag")
let ul = document.querySelector("ul")
let texto = document.querySelector("#text-input")

const agregar = (event) => {
    event.preventDefault()
    let li = document.createElement("li")
    li.classList.add("list-unstyled")
    ul.appendChild(li)
    let div = document.createElement("div")
    div.classList.add("form-control")
    let input = document.createElement("input")
    input.disabled = true 
    input.value = texto.value
    input.classList.add("rounded")
    let boton1 = document.createElement("button")
    boton1.classList.add("btn","btn-danger", "mx-2")
    boton1.innerText = " ✖️ Eliminar"
    let boton2 = document.createElement("button")
    boton2.innerText = " ✔️ Completo"
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





    
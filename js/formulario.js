const formulario = document.getElementById("formulario")
const inputFormulario = document.getElementById("inputFormulario")

const formularioCliente = data => {
    formulario.addEventListener("keyup", e => {
        e.preventDefault(); // Evitar que el sitio se recargue al escribir algo
        const letraCliente = inputFormulario.value.toLowerCase()
        console.log(letraCliente)
        const arrayFiltrado = data.filter(item => {
            const letraApi = item.name.toLowerCase()
            if(letraApi.indexOf(letraCliente) != -1) {
                return item
            }
        })
        /*console.log(arrayFiltrado)*/
        banderillas(arrayFiltrado)
    })
}
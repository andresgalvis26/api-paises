const banderas = document.getElementById("banderas")

document.addEventListener("DOMContentLoaded", e => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch("api.json")
        const data = await res.json()
        /*console.log(data)*/
        banderillas(data)
        formularioCliente(data)
        filtros(data)
    } catch (error){
        console.log(error)
    }
}

const banderillas = data => {
    let elementos = ""

    data.forEach(element => {
        elementos += `
        <article class="card">
            <img src="${element.flag}" alt="" class="img-fluid">
            <div class="card-content">
                <h3>${element.name}</h3>
                <p>
                    <b>Population: </b>
                    ${element.population}
                </p>
                <p>
                    <b>Capital: </b>
                    ${element.capital}
                </p>
                <p>
                    <b>Región: </b>
                    ${element.region}
                </p>
                <p>
                    <a href="pais.html?name=${element.name}">${element.name}</a>
                </p>
            </div>
        </article>
        `
    });

    banderas.innerHTML = elementos
}
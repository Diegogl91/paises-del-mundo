const banderas = document.getElementById('banderas')

document.addEventListener('DOMContentLoaded', e => {
    fetchData()
})

const fetchData = async () => {
    try{
        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()
        banderillas(data)
        formularioCliente(data)
    }catch(error){
        console.log(error)
    }
}

const banderillas = data => {
    let elementos = "";
    data.forEach(item => {
        const {name, capital, region, flags } = item;
        const {common, official} = name;
        const {svg} = flags;
        
        // let lengua = Object.values(item?.languages)

        //console.log('lenguas', lengua)
        elementos += `
        <article class="card">
            <img src="${svg}" alt="bandera" class="img-fluid">
            <div class="card-content">
                <h3>${common}</h3>
                <p>
                    <b>Capital: ${capital}</b>
                </p>
                <p>
                    <b>Nombre completo del pais: ${official}</b>
                </p>
                <p>
                    <b>Region: ${region}</b>
                </p>
                <p>
                    <b>Paises limitrofes:</b>
                </p>
                <p>
                    <b>Lengua: ${item?.languages}</b>
                </p>
                <p>
                    <b>Nombre y simbolo de moneda:</b>
                </p>
            </div>
        </article>`
    });
    banderas.innerHTML = elementos
}
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

function ayyy ( data ) {
    let ayyyData = data 
    var leng_array = Object.keys(ayyyData).map(
        function (key) {
        var elemento = ayyyData[key];
        elemento.id = key;
        return elemento;
        }
      )
    return leng_array 
}

const banderillas = data => {
    let elementos = "";
    
    data.forEach(item => {
        const {name, capital, region, flags } = item;
        const {common, official} = name;
        const {svg} = flags;
        
        if( item.languages != null) {
            let ayyres = ayyy(item.languages)
        }
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
                    <b>Lengua: ${ayyres} </b>
                </p>
                <p>
                    <b>Nombre y simbolo de moneda:</b>
                </p>
            </div>
        </article>`
    });
    banderas.innerHTML = elementos
}
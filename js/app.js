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

        if( item.languages != null) {
            lenguaRes = arregloData(item.languages)
        }

        let lenguajes = ""
        lenguaRes.forEach(element => {
            lenguajes += element + " ";
        });
        
        if(item.currencies != null){
            monedaRes = arregloData(item.currencies)
            
        }

        let borders = item.borders;
        
        
        if (borders!=null){
            limitrofes = arregloData(borders)
            
        }

        let paises = "";
        limitrofes.forEach(pais=>{
            console.log(pais)
            paises += pais + " ";
            // let nombrePaises = new Intl.DisplayNames(['en'], {type: 'region'});
            // console.log(nombrePaises.of(pais))
            
        })

        elementos += `
        <article class="card">
            <img src="${svg}" alt="bandera" class="img-fluid">
            <div class="card-content">
                <h3>${common}</h3>
                <p>
                <b>Capital:</b> ${capital}
                </p>
                <p>
                    <b>Official Name:</b> ${official}
                </p>
                <p>
                    <b>Region:</b> ${region}
                </p>
                <p>
                    <b>Borders:</b> ${paises}
                </p>
                <p>
                    <b>Languages:</b> ${lenguajes}
                </p>
                <p>
                    <b>Currencies:</b> ${monedaRes[0].name} ,${monedaRes[0].symbol} 
                </p>
            </div>
        </article>`
    });
    banderas.innerHTML = elementos
}


function arregloData( data ) {
    let dataObjeto = data 
    let leng_array = Object.keys(dataObjeto ).map(
        function (key) {
        let elemento = dataObjeto [key];
        elemento.id = key;
        return elemento;
        }
      )
    return leng_array 
}
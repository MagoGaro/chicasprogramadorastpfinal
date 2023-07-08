function looping(celDatos){
    console.log(celDatos[0].nombre)
    for(let i =0; i < celDatos.length; i++){
        posters.innerHTML +=`<div class="card" style="width: 18rem; height:20rem; margin: 1rem 0;">
        <img src="${celDatos[i].foto}" class="card-img-top" alt="${celDatos[i].nombre}">
        <div class="card-body">
          <h5 class="card-title">${celDatos[i].nombre}</h5>
          <p class="card-text">Fue visto por ultima vez en ${celDatos[i].zonap}</p>
        </div>
      </div>`
    }   
  }


fetch('https://script.google.com/macros/s/AKfycbzK1bCdHd9EJBHDpt3nFpCEosLYKc-Fv4iU8JNYhm_Yqf3Ypl3oAbsEA9Et_mxwubTLmQ/exec')
.then(response => response.json())
.then(datos => {
    console.log(datos.datos)
    looping(datos.datos)
})
.catch(error => console.log(error))
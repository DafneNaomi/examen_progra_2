import animeCatalog from "./data.js"
const divMain= document.getElementById("main")

const flex = document.getElementById("flex")

const tarjeta = document . getElementById ("tarjeta")

// const arregloBotones = document. querySelectorAll ("button"




let filtro = animeCatalog.filter((animeCatalog) =>  animeCatalog.name)

filtro.forEach((animeCatalog) => {

        

  flex.innerHTML += `<div class="bts">
        <button id= "botones">${animeCatalog.name}</button>  
                                                  </div>`
     })

     console.log(animeCatalog)  
     
     

const botones = document.querySelectorAll ("button")

  
  
   
botones.forEach((boton) => {

  boton.addEventListener("click" , (evento)=>{

    let nombreSeleccionado = evento.target.innerHTML;
    console.log(nombreSeleccionado);


    const personajeMostrar = animeCatalog.filter((animeCatalog) => animeCatalog.name === nombreSeleccionado)

 console.log(personajeMostrar);

    // let objetoFiltrado = 
    
      tarjeta.innerHTML = `<div class= "trjt">
      <img src=${personajeMostrar[0].image}>
      <h2>${personajeMostrar[0].name}</h2>
      <p>${personajeMostrar[0].desc}</p>
      </div>`;

  });

});

 console.log(botones,"jaja")










import { data } from "../data/data.js";

let items =document.getElementById('items')
let templateCard = document.getElementById('template-card').content;
let fragment = document.createDocumentFragment();;
let contenedor = document.getElementById('pruebaDelModal')

console.log(templateCard)

 data.forEach((item) => {
  let {id, name, image } = item;
    templateCard.querySelector('h5').textContent = name
    templateCard.querySelector('img').setAttribute('src', image);
    templateCard.querySelector('button').setAttribute('id', id);

    const otraTarjeta = templateCard.cloneNode(true)
    fragment.appendChild(otraTarjeta)
     
});

items.appendChild(fragment)


items.addEventListener('click', (e) => {

    console.log(e.target.classList.contains('btn'))

    if(e.target.classList.contains('btn')){
        
        let idPelicula = e.srcElement.id;

        data.forEach(item => {
            const { id, name, genero, sinopsis, reparto, image} = item;

            if (idPelicula == id ){
                contenedor.innerHTML = `
              
                
                <!-- Modal -->
                
                      <div class="modal-header">
                        <h1 class="modal-title" id="exampleModalLabel">${name}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                      <center><img src="${image}" alt=""  width='50%'> </center>
                      <h4 class='my-5'>${genero}</h4>
                      <p>${sinopsis}</p>
                      <h6>Reparto: ${reparto} </h6>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    
                      </div>
                 `  
            }
     })
  
 }
})



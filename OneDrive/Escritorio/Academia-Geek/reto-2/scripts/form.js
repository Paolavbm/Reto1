//import { data } from "../data/data;";

const formulario = document.getElementById('formulario')
const listar = document.getElementById('listar')
let datos=[];

formulario.addEventListener("submit", e=>{
    e.preventDefault();
    
    let nombre = document.getElementById("nombre").value 

    let apellido = document.getElementById("apellido").value

    let telefono = document.getElementById("telefono").value

    let email = document.getElementById("email").value

    let direccion = document.getElementById("direccion").value
    

    console.log(nombre, email,telefono, direccion)

    if (isNaN(nombre)) {
        if (isNaN(apellido)) {
            agregarUsuario(nombre, apellido, telefono, email, direccion);
            guardarDatos();
           
        } else {
            alert("solo se puede usar letras en apellido")
        }

    } else {
        alert("solo se puede usar letras en nombre")
    }
})

const agregarUsuario = (nombre,  apellido, telefono, email, direccion)=>{
    let registro = {
        nombre:nombre,
        apellido:apellido,
        telefono:telefono,
        email:email,
        direccion:direccion
    }
    datos.push(registro)
    console.log(datos)
}

const guardarDatos = ()=>{
    localStorage.setItem('usuario',JSON.stringify(datos))
    listarDatos();
}
const listarDatos = ()=>{
    listar.innerHTML=" " ;
    datos = JSON.parse(localStorage.getItem("usuario"))
    datos.forEach(element => {
        const {nombre, apellido, telefono, email, direccion}=element
        listar.innerHTML+= ` <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h6>
          <h5 class="card-title">${apellido}</h6>
          <h5 class="card-subtitle mb-2 text-muted">${telefono}</h6>
          <h5 class="card-subtitle mb-2 text-muted">${email}</h6>
          <h5 class="card-subtitle mb-2 text-muted">${direccion}</h6>
        </div>
      </div>
         `
    })
 }


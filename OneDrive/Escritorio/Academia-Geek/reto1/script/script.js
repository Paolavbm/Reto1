
//'3.99','194.26','1','4.52','5.37'//
let print = document.getElementById("Resultado")
let monedas = [];

document.addEventListener('submit', (e) =>{
e.preventDefault();
let inicial = document.getElementById('moneda-init').value;
let final = document.getElementById('moneda-final').value;
let monto = parseFloat(document.getElementById('monto').value);
if (isNaN(monto) || monto === " ") {
    alert("Completar todos los campos e ingresar números")

} else {
    valores(inicial, final, monto)
    
}
})
function valores(inicial, final, monto){



if (inicial==="dolar") {
    monedas = [1, 20.58, 4037.87, 0.88, 0.74];
} else if (inicial==="mexicano") {
   monedas = [0.049, 1, 196.13, 0.43, 0.036];
}
else if ( inicial==="colombiano"){
    monedas = [0.00025, 0.0052, 1, 0.00022, 0.00019]
}
else if (inicial==="euro"){
    monedas = [1.14, 23.37, 4583.99, 1, 0,84]
}
else if (inicial==="esterlina"){
    monedas = [1.35, 27.78, 5449.97, 1.19, 1]
}
if (final === "dolar" && inicial === "dolar" || final === "mexicano" && inicial === "mexicano" || final === "colombiano" && inicial === "colombiano" || final === "euro" && inicial === "euro" || final === "esterlina" && inicial === "esterlina"
) { alert ("No ingresar misma divisa en ambos campos")
    
}else{ejecucion(inicial, monedas,final, monto)
} 
}
function ejecucion (inicial,monedas, final, monto){
    let result = 0 
    if (inicial === "dolar") {
        if (final === "mexicano") {
            result = monto * monedas[1]
             show(final, result);
        } else if (final === "colombiano") {
            result = monto * monedas[2]
            show(final, result);
        } else if (final === "euro") {
            result = monto / monedas[3]
           show(final, result);
        } else if (final === "esterlina") {
            result = monto / monedas[4]
            show(final, result);
        }
    } else if (inicial === "mexicano") {
        if (final === "dolar") {
            result = monto / monedas[0]
            show(final, result);
        } else if (final === "colombiano") {
           result = monto * monedas[2]
            show(final, result);
        } else if (monto === "euro") {
            result = monto / monedas[3]
            show(final, result);
        } else if (final === "esterlina") {
            result = monto / monedas[4]
           show(final, result);
        } 
    } else if (inicial=== "colombiano") {
        if ( final === "dolar") {
            result = monto / monedas[0]
            show(final, result);
        } else if (final === "mexicano") {
            result = monto / monedas[1]
            show(final, result);
        } else if (final === "euro") {
            result = monto / monedas[3]
            show(final, result);
        } else if (final === "esterlina") {
            result = monto / monedas[4]
            show(final, result);
        } 
    } else if (inicial === "euro") {
        if (final === "dolar") {
           result = monto * monedas[0]
            show(final, result);
        } else if (final === "mexicano") {
            result = monto * monedas[1]
            show(final, result);
        } else if (final === "colombiano") {
            result = monto * monedas[2]
            show(final, result);
        } else if (final === "esterlina") {
           result = monto/ monedas[4]
            show (final, result);
        }
    } else if (inicial === "esterlina") {
        if (final === "dolar") {
            result = monto * monedas[0]
           show(final, result);
        } else if (final === "mexicano") {
           result = monto * monedas[1]
           show(final, result);
        } else if (final === "colombiano") {
            result = monto * monedas[2]
            show(final, result);
        } else if (final === "euro") {
            result = monto * monedas[3]
            show(final, result);
        } 
        
    } 
}


function show(final, result){
    
    
    let arr = [final,result]
    
    tire(arr)


}
function tire(arr) {
    arr.forEach(prn => {
        let h2 = document.createElement("h2")
        h2.textContent=prn;
        print.appendChild(h2)
        }
        )
}

// Dolar a mexicano




//document.addEventListener('submit', (e)=>{ 
//e.preventDefault()
//let input = document.getElementById('clase').value; 
    //console.log('Hola', input)
//})


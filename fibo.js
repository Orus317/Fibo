let a = 1
let b = 2
let c
let serie = [1, 2]
let limiteParaSerie = document.getElementById("limiteParaSerie")
let cajaDelResultado = document.getElementById("cajaDelResultado")
let botonParaFibo = document.getElementById("botonParaFibo")
botonParaFibo.addEventListener("click", fibo)



function fibo(){
    temp = limiteParaSerie.value - parseInt(limiteParaSerie.value)
    console.log(temp)
    if(temp == 0){
        for(let i=1;i<parseInt(limiteParaSerie.value)-1;i++){
            c = a + b
            a = b
            b = c
            serie.push(c)
        }
        console.log(serie)
        cajaDelResultado.innerHTML = serie
        limiteParaSerie.value = ""
        a = 1
        b = 2
        serie = [1,2]
    }   
    else {
        alert("El límite debe ser un número")
    }
}


let calculo = document.querySelector('#textos')
calculo.addEventListener('keyup',()=>{
    let cantidad1= document.querySelector('#textos').value.length
    let disponible = 140 - parseInt(cantidad1)
    document.querySelector('#cantidad').innerHTML = disponible
})
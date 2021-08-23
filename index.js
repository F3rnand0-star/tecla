// function llamada(){
//     console.log("Hola mundo");
// }

// function llamadora(call) {
//     console.log("Dentro de esta funcion llamamos nuestro callback")
//     call()
// }

// llamadora(llamada);
//---------------------
setTimeout(() => {
    console.log('1.- Este texto va primero')
}, 6000)
console.log('2.- Este texto va segundo')
setTimeout(() => {
    console.log('3.- Este texto va tercero')
}, 4000)
console.log('4.- Este texto va cuarto')





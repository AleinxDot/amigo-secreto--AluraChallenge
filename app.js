// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo() {

    let amigo = document.getElementById("amigo").value;
    console.log(amigo);

    if (amigo == null || amigo == "") {
        alert("Debe ingresar un nombre de amigo");
        return;
    }
    if (listaDeAmigos.includes(amigo)) {
        alert("El amigo ya se encuentra en la lista");
        return;
    }
    else{
        listaDeAmigos.push(amigo);
        document.getElementById("amigo").value = "";
        mostrarAmigos();
    }

}
function mostrarAmigos(){

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        lista.innerHTML += "<li>" + listaDeAmigos[i] + "</li>";
    }

}
function sortearAmigo(){

    let numeroDeAmigos = listaDeAmigos.length;
    if (numeroDeAmigos >= 0) {
        alert("No hay amigos en la lista");
        return;
    }
    if (numeroDeAmigos == 1) {
        alert("No se puede sortear con un solo amigo");
        return;
    }
    else{
        let indiceSorteado = Math.floor(Math.random() * numeroDeAmigos);
        let amigoSorteado = listaDeAmigos[indiceSorteado];
        document.getElementById('resultado').innerHTML = '<li>'+amigoSorteado+'</li>';
    }

}
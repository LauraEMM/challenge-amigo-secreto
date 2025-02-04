//Almacen de nombresd
let listaAmigosSecretos = [];

//Declarar variables
let lista = document.getElementById('listaAmigos');
let mostrarAmigoSecreto = document.getElementById('resultado'); 

//Agregar nombres
function agregarAmigo() {
    //Llamar el contenido del input
    let nombre = document.getElementById('amigo').value;

    //Si el input está vacio
    if (nombre === "") { 
        alert('Por favor, ingrese un nombre.');
        return;
    } else if (listaAmigosSecretos.includes(nombre)) {

            alert('El nombre incresado ya existe.');

             //Limpiar input
            document.getElementById('amigo').value = "";
            return;
        
    } else {
       //Ingresar el nombre al array
        listaAmigosSecretos.push(nombre);

        //Limpiar input
        document.getElementById('amigo').value = "";

        //llamar la función actualizarLista
        actualizarLista();

        return;
    }   
}

function actualizarLista(){
    
    //Mostrar los nombres en pantalla
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
        
    //Crear la lista
    listaAmigosSecretos.forEach(
        function (nombre) {
            let nuevoAmigo = document.createElement('li');
            nuevoAmigo.innerText = nombre;
            lista.appendChild(nuevoAmigo);
        }
    )
}

function sortearAmigo() {

    //alerta para listas vacias o menores a 2 personas
    if (listaAmigosSecretos.length === 0 || listaAmigosSecretos.length < 2) {
       mostrarAmigoSecreto.textContent = 'Se necesita ingresar como mínimo 2 nombres para realizar el sorteo.';
       return;
    }

    
    //Sortear amigo secreto
    let amigoAleatorio = Math.floor(Math.random()*listaAmigosSecretos.length);
    

    //Obtener nombre sorteado
    let amigoSecreto = listaAmigosSecretos[amigoAleatorio];    

    //Mostrar amigo secreto en pantalla
    mostrarAmigoSecreto.textContent = `El amigo secreto es: ${amigoSecreto}.`;
    
    // Limpiar la lista en el HTML
    lista.textContent = "";

}


function reiniciarSorteo() {
     // Limpiar el array
     listaAmigosSecretos = [];

     // Limpiar la lista en el HTML
    lista.innerHTML = ""; 
    
    //Limpiar el amigo secreto mostrado en pantalla
    mostrarAmigoSecreto.textContent = "";
   
}
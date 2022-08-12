//Declaración de la clase

class Animes{
    constructor(id, titulo, autor, año, precio){
        this.id = id,
        this.titulo = titulo,
        this.autor = autor,
        this.año = año,
        this.precio = precio
    }
    mostrarDatos(){
        console.log(`El anime es ${this.titulo} su autor es ${this.autor} y vale ${this.precio}. La id del anime es ${this.id}`)
    }

}

//Objetos

const anime1 = new Animes(1,"Initial D", "Shuichi Shigeno", 1995 , 2000)

const anime2 = new Animes(2,"Evangelion", "Hideaki Anno", 1995, 2500)

const anime3 = new Animes(3,"Naruto", "Masashi Kishimoto", 2002 , 2300)

const anime4 = new Animes(4,"Naruto Shippuden", "Masashi Kishimoto", 2007 , 3000)

const anime5 = new Animes(5,"Dragon Ball", "Akira Toriyama", 1986 , 2200)

const anime6 = new Animes(6,"Dragon Ball Z", "Akira Toriyama", 1989 , 2100)


//Array 

const directorio = [anime1,anime2,anime3,anime4,anime5,anime6]

//Declaracion de funciones:

//Funcion que permite al usuario agregar un anime

function nuevoAnime(){
    let tituloIngresado = prompt("Ingrese el titulo")
    let autorIngresado = prompt("Ingrese el autor")
    let añoIngresado = parseInt(prompt("Ingrese el año"))
    let precioIngresado = parseInt(prompt("Ingrese el precio"))
    let animeCreado = new Animes(directorio.length+1,tituloIngresado, autorIngresado, añoIngresado, precioIngresado)
    console.log(animeCreado)
    //Push de animeCreado al array
    directorio.push(animeCreado)
}
//Mostrar directorio anime

function mostrarDirectorio(){
    alert(`Podrá ver nuestro directorio en la consola:`)
    //For of array de objetos
    for(let anime of directorio){
        //Accedo a atributos de mi array de objetos
        anime.mostrarDatos()
    }
    //Otra forma de mostrar directorio con forEach y sin metodo
    directorio.forEach((anime)=>console.log(`${anime.titulo} de ${anime.autor}, vale ${anime.precio}`))
}

// Funcion para quitar un anime del directorio

function eliminarAnime(){
    let idEliminar = prompt("Ingrese la id del anime a eliminar")
    for(let animeBuscado of directorio){
        if (animeBuscado.id == idEliminar){
            console.log("Este es el anime " + animeBuscado.titulo)
            directorio.splice(idEliminar-1, 1)
            console.log(directorio)
        }
    }
}

// Funcion para ordenar por precios

function ordenarPorPrecio(){
    let opcion = prompt(`Ingrese MAYOR para ordenar de mayor a menor
                         Ingrese MENOR para ordenar de menor a mayor
    `)
    if(opcion.toUpperCase() == "MAYOR"){
        console.log(directorio.sort((a,b)=> (b.precio - a.precio)))
    }
    else if(opcion.toUpperCase() == "MENOR"){
        console.log(directorio.sort((a,b)=> (a.precio - b.precio)))
        
    }
}

// Funcion para buscar por nombre del anime

function buscarPorTitulo(){
        let buscado = prompt("Ingrese el titulo del anime que desea buscar")
        let busqueda = directorio.find((el)=>el.titulo.toLowerCase() == buscado.toLowerCase())
        if(busqueda == undefined){
            console.log("No disponemos de ese anime")
        }else{
            console.log(`Tenemos el anime ${busqueda.titulo} perteneciente a ${busqueda.autor} y vale ${busqueda.precio}`)
        }
        
}

// Funcion para buscar animes del mismo autor

function buscarMismoAutor(){
    let autorBuscado = prompt("Ingrese autor a buscar")
    let busqueda = directorio.filter((anime)=>anime.autor.toLowerCase() == autorBuscado.toLowerCase() )
    if (busqueda == ""){
        console.log("No disponemos de animes del autor solicitado")
    }else{
        console.log(busqueda)
    }
}
//Funcion que consulte al usuario opcion deseada
function preguntarOpcion(){
    let opcion = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver directorio de animes
                        2 - Agregar un anime a nuestro directorio 
                        3 - Eliminar un anime de nuestro directorio 
                        4 - Encontrar por titulo:
                        5 - Buscar animes de un mismo autor:
                        6 - Ordenar directorio por precios:
                        0 - Para salir
                        `))
    menu(opcion)
}

//Funcion de menu
function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias por visitarnos`)
        break    
        case 1:
            mostrarDirectorio()
      	break 
   	    case 2: 
            nuevoAnime()
      	break 
   	    case 3: 
            eliminarAnime()
      	break
        case 4: 
            buscarPorTitulo()
      	break
        case 5: 
            buscarMismoAutor()
      	break 
        case 6:
            ordenarPorPrecio()
        break
   	    default: 
      	alert(`Ingrese una opción correcta`)
    }
}

let salir 
while(salir != true){
    preguntarOpcion()
    
}
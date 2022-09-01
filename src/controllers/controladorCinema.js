let peliculas = Array(
    {
        nombre:"Aliens Xmas",
        genero:"Ciencia Ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinema-163ae.appspot.com/o/alien%20x%20mas.webp?alt=media&token=7f90fddf-b489-4be7-8523-b6ae33f54394",
        sinopsis: "rgbhjrgbhjb",
        clasificacion: "+18",
        idioma: "En subtitulado"
    },
    {
        nombre:"Cherry",
        genero:"Ciencia Ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinema-163ae.appspot.com/o/cherry.webp?alt=media&token=db0746ed-b0e8-4aab-8366-49475286279b",
        sinopsis: "rgbhjrgbhjb",
        clasificacion: "+18",
        idioma: "En subtitulado"
    },
    {
        nombre:"Harry Potter",
        genero:"Ciencia Ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinema-163ae.appspot.com/o/harry%20potter.webp?alt=media&token=e95c3323-15a2-4a6c-915c-4970935af0ac",
        sinopsis: "rgbhjrgbhjb",
        clasificacion: "+18",
        idioma: "En subtitulado"
    },
    {
        nombre:"Luca",
        genero:"Ciencia Ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinema-163ae.appspot.com/o/luca.webp?alt=media&token=196029d7-d5d7-472b-9fc7-f43e2845a1da",
        sinopsis: "rgbhjrgbhjb",
        clasificacion: "+18",
        idioma: "En subtitulado"
    },
    {
        nombre:"Mortal Kombat",
        genero:"Ciencia Ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinema-163ae.appspot.com/o/mortal%20kombat.webp?alt=media&token=45cecb9f-a73e-4913-adcb-742fc0ace804",
        sinopsis: "rgbhjrgbhjb",
        clasificacion: "+18",
        idioma: "En subtitulado"
    },
    {
        nombre:"No mires arriba",
        genero:"Ciencia Ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinema-163ae.appspot.com/o/no%20mires%20arriba.webp?alt=media&token=50c1b6cb-e781-4541-bd20-a21bb135defc",
        sinopsis: "rgbhjrgbhjb",
        clasificacion: "+18",
        idioma: "En subtitulado"
    },
    {
        nombre:"Spell",
        genero:"Ciencia Ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinema-163ae.appspot.com/o/spell.webp?alt=media&token=b5b35856-7758-4fb1-bc5a-0371862a1413",
        sinopsis: "rgbhjrgbhjb",
        clasificacion: "+18",
        idioma: "En subtitulado"
    },
    {
        nombre:"Spider Man",
        genero:"Ciencia Ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinema-163ae.appspot.com/o/spider%20man.webp?alt=media&token=4c2b1e92-42a7-471a-a109-ccd0a45d72cf",
        sinopsis: "rgbhjrgbhjb",
        clasificacion: "+18",
        idioma: "En subtitulado"
    },
    {
        nombre:"Ven a jugar",
        genero:"Ciencia Ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinema-163ae.appspot.com/o/ven%20a%20jugar.webp?alt=media&token=20161fe7-b15d-46ca-bf84-36d60adeaa50",
        sinopsis: "rgbhjrgbhjb",
        clasificacion: "+18",
        idioma: "En subtitulado"
    },
    {
        nombre:"Viuda negra",
        genero:"Ciencia Ficcion",
        duracion: 220,
        poster: "https://firebasestorage.googleapis.com/v0/b/cinema-163ae.appspot.com/o/viuda%20negra.webp?alt=media&token=8894b78f-0473-41ad-aa62-4a2c54c3728e",
        sinopsis: "rgbhjrgbhjb",
        clasificacion: "+18",
        idioma: "En subtitulado"
    },
  
)

//Recorriendo arreglo en JS

let fila = document.getElementById("fila")

peliculas.forEach(function(pelicula){
    //console.log(pelicula)
    console.log(pelicula.nombre)
    console.log(pelicula.genero)
    console.log(pelicula.duracion)
    console.log(pelicula.poster)
    console.log(pelicula.sinopsis)
    console.log(pelicula.clasificacion)
    console.log(pelicula.idioma)

    //traversing (crear etiquetas de html desde js)
    //1. creamos una columna para cada pelicula
    let columna = document.createElement("div")
    columna.classList.add("col")
    //2. creamos una tarjeta para cada pelicula
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card","h-100")
    //3. creamos una foto para cada pelicula
    let poster = document.createElement("img")
    poster.classList.add("card-img-top")
    poster.src = pelicula.poster
    //4. creamos un nombre para cada pelicula
    let nombre = document.createElement("h3")
    nombre.classList.add("card-title","text-center")
    nombre.textContent = pelicula.nombre
    //5. creamos el genero de cada pelicula
    let genero = document.createElement("h6")
    genero.classList.add("text-start")
    genero.textContent = " Genero: "+pelicula.genero
    //6. creamos el idioma de cada pelicula
    let idioma = document.createElement("h6")
    idioma.classList.add("text-start")
    idioma.textContent = " Idioma: "+pelicula.idioma
    //7. creamos la sinopsis de cada pelicula
    let sinopsis = document.createElement("p")
    sinopsis.classList.add("d-none")
    sinopsis.textContent = " sinopsis: "+pelicula.sinopsis

    

    //Padres e Hijos    
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(genero)
    tarjeta.appendChild(idioma)
    tarjeta.appendChild(sinopsis)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)   

})

//Detectando seleccionde una pelicula
fila.addEventListener("click",function(){
    alert("Esta seleccionando una pelicula")
})
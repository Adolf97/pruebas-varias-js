let arrPeliculas = [
  {
    nombre: "Suzume",
    duration: 122,
    img: "https://www.hindustantimes.com/ht-img/img/2023/04/21/1600x900/maxresdefault_1682057844226_1682057853799.jpg",
  },
  {
    nombre: "Demon Slayer: El tren infinito",
    duration: 117,
    img: "https://www.konnichiwafestival.com/wp-content/uploads/2021/03/DemonSlayer2021_Poster_100x70_LR-717x1024.jpg",
  },
  {
    nombre: "Jujutsu Kaisen Cero",
    duration: 105,
    img: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/03/Jujutsu-Kaisen-0-cine-estreno.jpg",
  },
  {
    nombre: "My Hero Academia: Misión Mundial de Héroes",
    duration: 105,
    img: "https://www.techgames.com.mx/wp-content/uploads/2021/12/My-Hero-Academia-Misio%CC%81n-Mundial-de-He%CC%81roes.jpg",
  },
  {
    nombre: "El tiempo contigo",
    duration: 114,
    img: "https://i.blogs.es/716f03/cartel-el-tiempo-contigo/1366_2000.jpeg",
  },
  {
    nombre: "El viaje de Chihiro",
    duration: 125,
    img: "https://es.web.img2.acsta.net/pictures/21/05/11/13/47/5979708.jpg",
  },
  {
    nombre: "El Castillo vagabundo",
    duration: 119,
    img: "https://es.web.img3.acsta.net/medias/nmedia/18/80/29/24/20062836.jpg",
  },
  {
    nombre: "Mi vecino Totoro",
    duration: 86,
    img: "https://i.blogs.es/3c0eff/totoro-poster/1366_2000.jpg",
  },
  {
    nombre: "La princesa Mononoke",
    duration: 133,
    img: "https://es.web.img3.acsta.net/pictures/22/05/09/12/02/0498795.jpg",
  },
  {
    nombre: "One Piece: Stampede",
    duration: 101,
    img: "https://tokyotomo.mx/cdn/shop/products/image_533a2eed-f9dc-4b6d-a4f0-91efd52984e5.jpg?v=1651206802",
  },
]

const reloadPage = () => {
  window.location.reload()
}

const container = document.getElementById("container_movies");

const addCardMovie = (arr) => {
  arr.map(movie => {
    // Crear la card para la película
    const card = document.createElement("div");
    card.className = "card_movie";

    // Crear el título
    const movieName = document.createElement("h1");
    movieName.className = "movie_title";
    movieName.textContent = movie.nombre;

    // Crear el div para la imagen
    const movieImgDiv = document.createElement("div")
    movieImgDiv.className = "movie_img_container"
    const movieImg = document.createElement("img");
    movieImg.className = "movie_img";
    movieImg.src = movie.img;
    movieImgDiv.appendChild(movieImg);

    // Crear el span con la duración
    const movieDuration = document.createElement("span");
    movieDuration.className = "movie_duration";
    // Condicional para 2 horas exactas o para cuando tienen minutos
    if(movie.duration % 60 === 0) {
      movieDuration.textContent = movie.duration/60 + " horas";
    } else {
      if(Math.floor(movie.duration/60) === 1) {
        movieDuration.textContent = Math.floor(movie.duration/60) + " hora y " + movie.duration%60 + " minutos"
      } else {
        movieDuration.textContent = Math.floor(movie.duration/60) + " horas y " + movie.duration%60 + " minutos"
      }
    }

    // Añade cada elemento a la tarjeta de la película
    card.appendChild(movieName);
    card.appendChild(movieImgDiv);
    card.appendChild(movieDuration)

    // Añade la tarjeta al contenedor
    container.appendChild(card);
  })
}

addCardMovie(arrPeliculas);

// Función para ordenar de menor duración a mayor
const orderByTimeLess = () => {
  arrPeliculas.sort((a, b) => {
    return a.duration - b.duration
  })
  
  while(container.firstChild) {
    container.removeChild(container.firstChild)
  }
  addCardMovie(arrPeliculas)
}
// Función para ordenar de mayor duración a menor
const orderByTimeMore = () => {
  arrPeliculas.sort((a, b) => {
    return b.duration - a.duration
  })
  
  while(container.firstChild) {
    container.removeChild(container.firstChild)
  }
  addCardMovie(arrPeliculas)
}

const buttonLess = document.getElementById("sortMenorMayor");
buttonLess.addEventListener("click", orderByTimeLess);

const buttonMore = document.getElementById("sortMayorMenor");
buttonMore.addEventListener("click", orderByTimeMore);


// Función para determinar cuántas y qué pelícuas puedo ver
const calculate = () => {
  const maxHoras = parseFloat(prompt("Cuántas horas vas a ver películas?")) * 60;
  let tiempoPeliculas = 0;
  let newArrPeliculas = [];
  let i = 0;

  arrPeliculas.sort((a, b) => {
    return a.duration - b.duration
  })
  
  while(maxHoras - tiempoPeliculas > 0 && arrPeliculas[i].duration < maxHoras - tiempoPeliculas) {
    const time = arrPeliculas[i].duration;
    tiempoPeliculas += time;

    const newMovie = arrPeliculas[i]
    newArrPeliculas.push(newMovie)
    i++;

    if(i === arrPeliculas.length) {
      break
    }
  }

  while(container.firstChild) {
    container.removeChild(container.firstChild)
  }
  addCardMovie(newArrPeliculas)

  const totalHoursGiven = document.getElementById("totalHoursGiven")
  totalHoursGiven.textContent = "Horas que tienes: " + maxHoras/60;

  const totalMovies = document.getElementById("totalMovies")
  if(newArrPeliculas.length === arrPeliculas.length) {
    totalMovies.textContent = "Total de películas: ¡¡Puedes ver todas!!" 
  } else {
    totalMovies.textContent = "Total de películas: " + newArrPeliculas.length
  }

  const totalHours = document.getElementById("totalHours")
  totalHours.textContent = "Total de tiempo: " + Math.floor(tiempoPeliculas/60) + " horas y " + Math.round(tiempoPeliculas%60) + " minutos"

  // Funciones visuales en la página
  const header = document.getElementById("header")
  const containerButtons = document.getElementById("buttons")
  const btnReload = document.createElement("button")
  btnReload.className = "btnReload"
  btnReload.textContent = "Regresar a Página Principal"
  header.replaceChild(btnReload, containerButtons);
  btnReload.addEventListener("click", reloadPage)
}

const buttonCalculate = document.getElementById("calculate");
buttonCalculate.addEventListener("click", calculate);
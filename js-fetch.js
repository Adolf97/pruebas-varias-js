
// const btnClicked = () => {
//   console.log("CLICK!!!");
// }

// let seconds = 2
// setTimeout(() => {
//   console.log(`Ya pasaron los ${seconds} segundos`);
// }, seconds * 1000)

// console.log("Esto se ejecuta al instante");

// console.time("Loop Took")
// let total = 0
// for (let index = 0; index < 500_000_000; index++) {
//   total += index
// }
// console.timeEnd("Loop Took");

// console.log("Finalizó el loop", total);

// const makeRequest = (method, url) => {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open(method, url)
//     xhr.responseType = "json"
//     xhr.onload = () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.response)
//       } else {
//         reject(new Error(xhr.statusText))
//       }
//     }

//     xhr.onerror = () => {
//       reject(new Error("Network Error"))
//     }
//     xhr.send()
//   })

//   return promise
// }

// const baseURL = "https://jsonplaceholder.typicode.com"

// const myFetch = (url) => {
//   return fetch(url).then((res) => res.json())
// }

// const promise = myFetch(`${baseURL}/users/1`)

// promise
//   .then((user) => myFetch(`${baseURL}/posts?userId=${user.id}`)
// )
//   .then((posts) => myFetch(`${baseURL}/comments?postId=${posts[0].id}`))
//   .then((comments) => {
//     console.log({ comments });
//   })
//   .catch((err) => {
//     console.log("Todo salió mal", err);
//   })
//   .finally(() => {
//     console.log("Esto se ejecutaría SIEMPRE");
//   })

  const baseURL = "https://api.jikan.moe/v4/anime"

  const myFetch = (url) => {
    return fetch(url).then((res) => res.json())
  }
  
  const promise = myFetch(`${baseURL}?q=mashle`)
  
  promise
    .then((anime) => {
      data = anime.data
      return data
    })
    .then((anime) => {
      index = 0
      let animes = {}
      for (anime in data) {
        anime = data[index]
        console.log(animes);
        index += 1
      }
    })
import { movies } from "./db.js"

let list = document.querySelector(".promo__interactive-list")
let selectedPoster = null; // Храним ссылку на текущий выбранный постер

let newIframe = document.createElement('iframe');
newIframe.className = 'film'
newIframe.width = '920'
newIframe.height = '622'
newIframe.src = 'https://www.youtube.com/embed/d96cjJhvlMA'
newIframe.title = 'Marvel Studios’ Guardians of the Galaxy Vol. 3 | Official Trailer'
newIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
newIframe.allowFullscreen = true

let iframeContainer = document.getElementById('iframeContainer')
// Добавляем новый iframe в контейнер
iframeContainer.appendChild(newIframe)

for (let movie of movies) {
    let li = document.createElement("li")
    let del = document.createElement("div")
    let film_poster = document.createElement("div")

    li.innerText = movie.Title;
    li.classList.add("promo__interactive-item")
    del.classList.add("delete")

    li.append(del)
    list.append(li)

    li.onclick = () => {
        newIframe.src = movie.Url
        newIframe.title = movie.Title
    }

    li.ondblclick = () => {
        if (selectedPoster) {
            selectedPoster.remove()
        }
        newIframe.remove()
        film_poster.classList.add("film_poster")
        iframeContainer.appendChild(film_poster)
        film_poster.style.backgroundImage = `url('${movie.Poster}')`
        selectedPoster = film_poster
        let titlesList = document.createElement("div")
        let titleName = document.createElement("div")
        let actorsList = document.createElement("div")
        let actorName = document.createElement("div")
        let yearsList = document.createElement("div")
        let yearName = document.createElement("div")
        let genresList = document.createElement("div")
        let genreName = document.createElement("div")
        let directorsList = document.createElement("div")
        let directorName = document.createElement("div")
        let countrysList = document.createElement("div")
        let countryName = document.createElement("div")
        let releasedsList = document.createElement("div")
        let releasedName = document.createElement("div")
        let runtimesList = document.createElement("div")
        let runtimeName = document.createElement("div")

        film_poster.append(titlesList,actorsList,yearsList,genresList,directorsList,countrysList,releasedsList,runtimesList)
            titleName.classList.add("titles_name")
            titleName.innerHTML = `Movie ${movie.Title}`
            titlesList.appendChild(titleName) 
            actorName.classList.add("actors_name")
            actorName.innerHTML = `Actors: ${movie.Actors}`
            actorsList.appendChild(actorName) 
            yearName.classList.add("year_name")
            yearName.innerHTML = `Year: ${movie.Year}`
            yearsList.appendChild(yearName)
            genreName.classList.add("genre_name")
            genreName.innerHTML = `Genre: ${movie.Genre}` 
            genresList.appendChild(genreName)
            directorName.classList.add("director_name")
            directorName.innerHTML = `Director: ${movie.Director}` 
            directorsList.appendChild(directorName)
            countryName.classList.add("country_name")
            countryName.innerHTML = `Country: ${movie.Country}`
            countrysList.appendChild(countryName)
            releasedName.classList.add("released_name")
            releasedName.innerHTML = `Released: ${movie.Released}`
            releasedsList.appendChild(releasedName) 
            runtimeName.classList.add("runtime_name")
            runtimeName.innerHTML = `Run Time: ${movie.Runtime}`
            runtimesList.appendChild(runtimeName) 
    }

    del.onclick = () => {
        li.remove()
    }
}


// Как сделать изменить fontSize у actorName
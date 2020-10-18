document.addEventListener('DOMContentLoaded', function() {   
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);

    renderMovies = (moviesArray) => {
        let movieHTML = moviesArray.map(mapMovies)
        return movieHTML.join('');
    }
    
    document.querySelector(".movie-container").innerHTML = renderMovies(watchlist);
})

mapMovies = (currentMovie) => {
    return `
                    <div class="movie-container">
                        <div class="movie col">
                            <span id='title'>${currentMovie.Title}</span>
                            <span id='release-date'>${currentMovie.Year}</span>
                            <img src="${currentMovie.Poster}" alt="">
                        </div>
                    </div>
    `
    }
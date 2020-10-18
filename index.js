document.addEventListener('DOMContentLoaded', function() {   
    renderMovies = (moviesArray) => {
        let movieHTML = moviesArray.map(mapMovies)
        return movieHTML.join('');
    }
    
    document.getElementById("search-form").addEventListener("submit", function(e){
        e.preventDefault();
        let searchString = document.querySelector('.search-bar').value;
        let urlEncodedSearchString = encodeURIComponent(searchString);
        axios.get(`http://www.omdbapi.com/?apikey=fc448eb3&s=${urlEncodedSearchString}`)
        .then(
            (response) => {
                console.log(response.data)
                document.querySelector(".movie-container").innerHTML = renderMovies(response.data.Search);
            }
        )
    });
})

mapMovies = (currentMovie) => {
return `
                <div class="movie-container">
					<div class="movie col">
						<span id='title'>${currentMovie.Title}</span>
						<span id='release-date'>${currentMovie.Year}</span>
                        <img src="${currentMovie.Poster}" alt="">
                        <button onclick="saveToWatchlist('${currentMovie.imdbID}')" type='button'>Add</button>
					</div>
				</div>
`
}

saveToWatchlist = (imdbID) => {
    let movie = movieData.find(currentMovie =>{
        return currentMovie.imdbID == imdbID; 
    })
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    if(watchlist == null) {
        watchlist = [];
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}


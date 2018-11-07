// var moviesContainer = document.getElementById('resultsContainer')

// document.addEventListener('DOMcontentLoaded', function () {
//   moviesContainer.innerHTML = renderMovies(movieData)

//   function renderMovies (movieArray) {
//     var moviesHTML = movieArray.map(function (currentMovie) {
//       var moviesHTML = `
//         <div class="card" style="width: 18rem;">
//         <img class="card-img-top" src=${currentMovie.Poster} alt=${currentMovie.Title}">
//         <div class="card-body">
//             <h5 class="movie-title">${currentMovie.Title}<span class="movie-rel-date">${currentMovie.Year}</span></h5>
//             <a href="#" class="btn btn-primary">Add</a>
//         </div>
//     </div>
//     `
//       return moviesHTML
//     })
//     return moviesHTML.join('')
//   }
// })
// ~~~~~~~~~~~~~
// 
// var movieData = [
// 	{
// 		Title: "The Dark Knight",
// 		Year: "2008",
// 		imdbID: "tt0468569",
// 		Type: "movie",
// 		Poster:
// 			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
// 	},
// 	{
// 		Title: "The Dark Knight Rises",
// 		Year: "2012",
// 		imdbID: "tt1345836",
// 		Type: "movie",
// 		Poster:
// 			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg"
// 	},
// 	{
// 		Title: "Thor: The Dark World",
// 		Year: "2013",
// 		imdbID: "tt1981115",
// 		Type: "movie",
// 		Poster:
// 			"https://ia.media-imdb.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg"
// 	},
// 	{
// 		Title: "Transformers: Dark of the Moon",
// 		Year: "2011",
// 		imdbID: "tt1399103",
// 		Type: "movie",
// 		Poster:
// 			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_SX300.jpg"
// 	},
// 	{
// 		Title: "Zero Dark Thirty",
// 		Year: "2012",
// 		imdbID: "tt1790885",
// 		Type: "movie",
// 		Poster:
// 			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4OTUyNzcwN15BMl5BanBnXkFtZTcwMTQ1NDE3OA@@._V1_SX300.jpg"
// 	},
// 	{
// 		Title: "Dark Shadows",
// 		Year: "2012",
// 		imdbID: "tt1077368",
// 		Type: "movie",
// 		Poster:
// 			"https://images-na.ssl-images-amazon.com/images/M/MV5BMjc0NzAyMzI1MF5BMl5BanBnXkFtZTcwMTE0NDQ1Nw@@._V1_SX300.jpg"
// 	},
// 	{
// 		Title: "Dark City",
// 		Year: "1998",
// 		imdbID: "tt0118929",
// 		Type: "movie",
// 		Poster:
// 			"https://ia.media-imdb.com/images/M/MV5BMGExOGExM2UtNWM5ZS00OWEzLTllNzYtM2NlMTJlYjBlZTJkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// 	},
// 	{
// 		Title: "Dancer in the Dark",
// 		Year: "2000",
// 		imdbID: "tt0168629",
// 		Type: "movie",
// 		Poster:
// 			"https://images-na.ssl-images-amazon.com/images/M/MV5BNDVkYWMxNWEtNjc2MC00OGI5LWI3NmUtYWUwNDQyOTc3YmY5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// 	},
// 	{
// 		Title: "The Dark Tower",
// 		Year: "2017",
// 		imdbID: "tt1648190",
// 		Type: "movie",
// 		Poster:
// 			"https://ia.media-imdb.com/images/M/MV5BMTU3MjUwMzQ3MF5BMl5BanBnXkFtZTgwMjcwNjkxMjI@._V1_SX300.jpg"
// 	},
// 	{
// 		Title: "Dark Skies",
// 		Year: "2013",
// 		imdbID: "tt2387433",
// 		Type: "movie",
// 		Poster:
// 			"https://ia.media-imdb.com/images/M/MV5BMTcxNDE1OTgyOF5BMl5BanBnXkFtZTcwMTEyMzMxOQ@@._V1_SX300.jpg"
// 	}
// ];

// ~~~~~~~~~~~~~~

var resultsContainer = document.getElementById('resultsContainer')

console.log(resultsContainer)

document.addEventListener('DOMContentLoaded', function () {
  resultsContainer.innerHTML = renderMovies(movieData)

  document.getElementById('search-form').addEventListener('input', function(e) {e.preventDefault()
    var searchString = e.target.value.toLowerCase();
    var filteredData = movieData.filter(function(movie){
    var foundInName = movie.Title.toLowerCase().indexOf(searchString) > -1;
    var foundInDate = movie.Year.toLowerCase().indexOf(searchString) > -1;
    return foundInName || foundInDate;
    })
    if (e.target.value == ''){
    console.log('rendering movies')
    resultsContainer.innerHTML = renderMovies(movieData)
    } else {
    console.log('rendering search')
    resultsContainer.innerHTML = renderMovies(filteredData) + 
    `<div class="col-12 text-center text-white-50 mt-5 mb-5 pt-3 pb-3" id="pageDivider">
    <h2>Other Movies You Might Enjoy</h2>
    </div>` + 
    renderMovies(movieData)
    }
  })

function renderMovies (movies) {
    var resultsHTML = movies.map(function (currentMovie) {
        var resultsHTML = `
        <div class="col-lg-4 col-md-6 col-sm-12 results">
        <div class="card bg-dark text-white text-center" style="width: 18rem;">
            <img class="card-img img-responsive" src=${currentMovie.Poster} alt=${currentMovie.Title} alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${currentMovie.Title}</h5>
                <p class="card-text">${currentMovie.Year}</p>
            </div>
            <div class="card-footer text-white-50 btn">
                Save to Collection
            </div>
        </div>
        </div>
        `
        console.log('Now at ' + currentMovie.Title)
    return resultsHTML 
    })
    // var wholeEnchalada = resultsHTML.join('')
    // console.log('Whole Enchalada ' + wholeEnchalada)
    return resultsHTML.join('') 

  }
})
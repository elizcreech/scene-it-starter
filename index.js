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
// ~~~~~~~~~~~~~~

var resultsContainer = document.getElementById('resultsContainer')

// console.log(resultsContainer)

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
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src=${currentMovie.Poster} alt=${currentMovie.Title}">
                    <div class="card-body">
                        <h5 class="movie-title">${currentMovie.Title}<span class="movie-rel-date">${currentMovie.Year}</span></h5>
                        <a href="#" class="btn btn-primary">Add</a>
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

// var resultsHTML = `
// <div class="col-lg-4 col-md-6 col-sm-12 results">
// <div class="card bg-dark text-white text-center" style="width: 18rem;">
//     <img class="card-img img-responsive" src=${currentMovie.Poster} alt=${currentMovie.Title} alt="Card image cap">
//     <div class="card-body">
//         <h5 class="card-title">${currentMovie.Title}</h5>
//         <p class="card-text">${currentMovie.Year}</p>
//     </div>
//     <div class="card-footer text-white-50 btn">
//         Save to Collection
//     </div>
// </div>
// </div>
// `
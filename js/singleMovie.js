const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);

const id = urlParams.get("id");
const url = "https://cinefilos-6f5b.restdb.io/rest/movies/" + id;

console.log("works1");

//The API-key:
const options = {
  headers: {
    "x-apikey": "620ccc0334fd621565858653",
  },
};

//Fetch the data

fetch(url, options)
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    showMovie(data);
    // console.log(data);
  });

//Populate the page

function showMovie(movie) {
  document.querySelector(".title_movie").textContent = movie.title;
  document.querySelector(".title-single-movie").textContent = movie.title;
  document.querySelector(".storyline p").textContent = movie.plotSummary;
  document.querySelector(".release_year").textContent = movie.releaseYear;
  document.querySelector(".director").textContent = movie.director;
  document.querySelector(".actors").textContent = movie.cast;
  document.querySelector(".writing_credits").textContent = movie.writingCredits;
  document.querySelector(".rating").textContent = movie.ratingIMDB;
  document.querySelector(".awards").textContent = movie.awards;
  document.querySelector(".soundstrack").textContent = movie.soundtrackCredits;
  document.querySelector(".budget").textContent = movie.budgetMillionUsd;
  document.querySelector(
    ".poster"
  ).src = `https://cinefilos-6f5b.restdb.io/media/${movie.cover}`;
}
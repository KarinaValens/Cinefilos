//API Key & JS fetch data from restdb.io

const url = "https://cinefilos-6f5b.restdb.io/rest/movies?max=12";

//The API-key:
const options = {
  headers: {
    "x-apikey": "620ccc0334fd621565858653",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    //we have the data
    console.log(data);
    handleData(data);
    console.log("works?");
  });
// .catch((e) => {
//   console.error("An error occured:", e.message);
// });

function handleData(data) {
  data.forEach(showMovie);
  // console.log("works?2");
}

function showMovie(movie) {
  const template = document.querySelector("#movie_template").content;
  const clone = template.cloneNode(true);
  console.log(movie);

  //Populate with data
  // clone.querySelector("h2").textContent = movie.title;
  clone.querySelector("h3").textContent = `${movie.title}`;
  clone.querySelector(".year").textContent = `${movie.releaseYear}`;
  clone.querySelector(".plotSummary").textContent = `${movie.plotSummary}`;
  /* clone.querySelector("a").setAttribute("href", `./html/singleMovie.html?id=${movie._id}`); */

  //Poster

  clone.querySelector(".poster").src = `https://cinefilos-6f5b.restdb.io/media/${movie.cover}`;
  clone.querySelector(".poster").alt = `https://cinefilos-6f5b.restdb.io/media/${movie.title}`;

  //Grab Parent of the movie template. We chose the place where we want to paste the clones.
  const parent = document.querySelector("main");
  //Append / Add movie there in the parent "main tag" in this case.
  parent.appendChild(clone);

  //Nothing else
}
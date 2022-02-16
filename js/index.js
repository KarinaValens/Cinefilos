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
    //data is available
    console.log(data);
    //handleData(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

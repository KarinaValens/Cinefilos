//API Key & JS fetch data from restdb.io

const url = "https://cinefilos-6f5b.restdb.io/rest/movies?max=12";

//The API-key:
const options = {
  headers: {
    "x-apikey": "b755415f32b40f2ef6a34957f62d45e34bed5",
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
    //handleData(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

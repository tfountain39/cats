const request = require(`request`);
let search = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, (error, response, body) => {
  console.log(`error`, error);
  console.log(`statusCode`, response && response.statusCode);
  const data = JSON.parse(body);
  if (data.length < 1) {
    console.log(`Breed not found`);
  } else {
    console.log(`body`, data);
  }
});
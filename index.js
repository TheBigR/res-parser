const axios = require("axios");

axios
  .get("https://coderbyte.com/api/challenges/json/age-counting")
  .then((res) => {
    let properties = res.data.data.split(", ");
    let counter = 0;
    properties.forEach(function (property) {
      let tup = property.split("=");
      if (tup[0] == "age") {
        if (Number(tup[1]) > 50) {
          counter++;
        }
      }
    });
    console.log(counter);
    return counter;
  })
  .catch((error) => {
    console.error(error);
  });

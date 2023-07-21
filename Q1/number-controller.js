const getNumber = async (req, res, next) => {
  const queries = req.query;
  console.log(queries);
  const url1 = queries.url[0];
  const url2 = queries.url[1];
  console.log(url1, url2);
  fetchNumbers(url1);
};

const fetchNumbers = async (link) => {
  fetch(link)
    .then((response) => {
      if (response.ok) {
        console.log("Done");
        return response.json();
      }
      throw new Error("Request failed!");
    })
    .catch((err) => {
      console.log("error");
    });
};

exports.getNumber = getNumber;

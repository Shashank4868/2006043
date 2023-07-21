const url = require("url");
const { URLSearchParams } = require("url");

var mySet = new Set();
const getNumber = async (req, res, next) => {
  const queries = getAllUrlsFromQuery(req.url);
  for (const query of queries) {
    const data = await getDataFromApi(query);
  }
  var answer = [...mySet];
  answer.sort(function (a, b) {
    return a - b;
  });

  return res.status(200).json({
    numbers: answer,
  });
};

function getAllUrlsFromQuery(queryString) {
  const searchParams = new URLSearchParams(queryString);
  const urls = [];

  // Loop through all keys in the query parameters
  for (const key of searchParams.keys()) {
    const value = searchParams.get(key);
    // Check if the value is a valid URL
    if (isValidUrl(value)) {
      urls.push(value);
    }
  }

  return urls;
}

// Helper function to check if a string is a valid URL
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}

function getDataFromApi(apiUrl) {
  fetch(new URL(apiUrl))
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // const arr = data.numbers;
      // const dataArray = ansArray.push(...arr);
      // ansArray = dataArray.filter(
      //   (value, index, array) => array.indexOf(value) === index
      // );
      // return data.numbers;
      const newSet = new Set();
      const arr = data.numbers;
      arr.forEach((item) => {
        newSet.add(item);
      });
      mySet = new Set([...mySet, ...newSet]);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

exports.getNumber = getNumber;

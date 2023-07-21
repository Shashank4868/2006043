const axios = require("axios");

const validURLChecker = (string) => {
  try {
    new URL(string);
    return true;
  } catch (error) {
    return false;
  }
};

const getNumber = async (req, res) => {
  const urls = req.query.url;
  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({
      error: "Wrong Query Passed",
    });
  }

  try {
    const response = urls.filter(validURLChecker).map(async (url) => {
      try {
        const response = await axios.get(url);
        return response.data.numbers;
      } catch (error) {
        return [];
      }
    });

    const responseData = await Promise.allSettled(response);
    const answer = Array.from(
      new Set(
        responseData.flatMap((result) =>
          result.status === "fulfilled" ? result.value : []
        )
      )
    ).sort((a, b) => a - b);

    return res.json({ numbers: answer });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error." });
  }
};

exports.getNumber = getNumber;

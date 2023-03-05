const Suggestion = require("../../models/suggestion.model");

const getList = async (req, res, next) => {
  const result = await Suggestion.find();
  const reversedResult = result.reverse();
  res.json(reversedResult);
};

module.exports = {
  getList,
};

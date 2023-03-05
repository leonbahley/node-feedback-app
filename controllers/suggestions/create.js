const Suggestion = require("../../models/suggestion.model");

const create = async (req, res, next) => {
  const { title, category, detail } = req.body;
  const result = await Suggestion.create({
    title,
    category,
    detail,
  });
  res.status(201).json(result);
};

module.exports = {
  create,
};

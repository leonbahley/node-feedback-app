const Suggestion = require("../../models/suggestion.model");
const { createHttpException } = require("../../helpers");

const getById = async (req, res, next) => {
  const { suggestionId } = req.params;
  try {
    const result = await Suggestion.findById(suggestionId);
    res.json(result);
  } catch (error) {
    throw createHttpException(404, "Not found");
  }
};

module.exports = {
  getById,
};

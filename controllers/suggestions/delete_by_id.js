const Suggestion = require("../../models/suggestion.model");
const { createHttpException } = require("../../helpers");

const deleteById = async (req, res, next) => {
  const { suggestionId } = req.params;

  const result = await Suggestion.deleteOne({ _id: suggestionId });
  if (result.deletedCount === 0) {
    throw createHttpException(404, "Not found");
  }

  res.status(200).json({ message: "suggestion deleted" });
};

module.exports = {
  deleteById,
};

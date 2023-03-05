const Suggestion = require("../../models/suggestion.model");

const update = async (req, res, next) => {
  const { title, category, detail, status } = req.body;

  const { suggestionId } = req.params;

  const result = await Suggestion.updateOne(
    { _id: suggestionId },
    { title, category, detail, status },
    { new: true }
  );
  if (!result) {
    throw createHttpException(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  update,
};

const Suggestion = require("../../models/suggestion.model");
const { createHttpException } = require("../../helpers");

const upvote = async (req, res, next) => {
  const { id } = req.body;
  const result = await Suggestion.findOneAndUpdate(
    { _id: id },
    { $inc: { upvote_count: 1 } },
    { new: true }
  );
  if (!result) {
    throw createHttpException(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  upvote,
};

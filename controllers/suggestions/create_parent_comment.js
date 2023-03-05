const Suggestion = require("../../models/suggestion.model");

const createParentComment = async (req, res, next) => {
  const { comment, id, commentId } = req.body;
  const result = await Suggestion.updateOne(
    { _id: id },
    { $push: { comments: { comment, commentId } } },
    { new: true }
  );
  if (!result) {
    throw createHttpException(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  createParentComment,
};

const Suggestion = require("../../models/suggestion.model");

const createCommentReply = async (req, res, next) => {
  const { comment, id, parentCommentId } = req.body;
  const result = await Suggestion.updateOne(
    { _id: id },
    { $push: { commentsReplies: { comment, parentCommentId } } },
    { new: true }
  );
  if (!result) {
    throw createHttpException(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  createCommentReply,
};

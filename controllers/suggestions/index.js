const { create } = require("./create");
const { deleteById } = require("./delete_by_id");
const { getList } = require("./get_list");
const { getById } = require("./get_by_id");
const { upvote } = require("./upvote");
const { createParentComment } = require("./create_parent_comment");
const { createCommentReply } = require("./create_comment_reply");
const { update } = require("./update");

module.exports = {
  create,
  deleteById,
  getList,
  getById,
  upvote,
  createParentComment,
  createCommentReply,
  update,
};

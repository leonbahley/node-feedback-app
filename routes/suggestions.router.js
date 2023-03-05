const express = require("express");
const suggestionsController = require("../controllers/suggestions");
const { controllerExceptionWrapper } = require("../helpers");

const router = express.Router();

router
  .post("/", controllerExceptionWrapper(suggestionsController.create))
  .delete(
    "/:suggestionId",
    controllerExceptionWrapper(suggestionsController.deleteById)
  )
  .get("/", controllerExceptionWrapper(suggestionsController.getList))
  .get(
    "/:suggestionId",
    controllerExceptionWrapper(suggestionsController.getById)
  )
  .patch("/upvote", controllerExceptionWrapper(suggestionsController.upvote))
  .patch(
    "/createParentComment",
    controllerExceptionWrapper(suggestionsController.createParentComment)
  )
  .patch(
    "/createCommentReply",
    controllerExceptionWrapper(suggestionsController.createCommentReply)
  )
  .patch(
    "/:suggestionId",
    controllerExceptionWrapper(suggestionsController.update)
  );

module.exports = router;

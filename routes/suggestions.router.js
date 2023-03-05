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
// router.get(
//   "/",
//   authMiddleware,
//   controllerExceptionWrapper(contactsController.getList)
// );

// router.get(
//   "/:contactId",
//   authMiddleware,
//   controllerExceptionWrapper(contactsController.getById)
// );
// router.post(
//   "/",
//   authMiddleware,
//   validateBody(addContactSchema),
//   controllerExceptionWrapper(contactsController.create)
// );

// router.delete(
//   "/:contactId",
//   authMiddleware,
//   controllerExceptionWrapper(contactsController.deleteById)
// );

// router.put(
//   "/:contactId",
//   authMiddleware,
//   validateBody(addContactSchema),
//   controllerExceptionWrapper(contactsController.update)
// );

// router.patch(
//   "/:contactId/favorite",
//   authMiddleware,
//   validateBody(updateFavValueSchema),
//   controllerExceptionWrapper(contactsController.updateFavValue)
// );

module.exports = router;

const mongoose = require("mongoose");

const suggestion = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Set title for suggestion"],
    },
    category: {
      type: String,
      enum: ["feature", "ui", "ux", "bug", "enhancement"],
    },
    detail: {
      type: String,
      required: [true, "Set title for suggestion"],
    },
    status: {
      type: String,
      default: "planned",
    },
    upvote_count: {
      type: Number,
      default: 0,
    },
    comments: [],
    commentsReplies: [],
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

const Suggestion = mongoose.model("suggestions", suggestion);

module.exports = Suggestion;

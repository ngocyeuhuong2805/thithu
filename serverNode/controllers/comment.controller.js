const md = require("../models/comment.model");

exports.getCommentById = async (req, res, next) => {
  let idComic = req.params.idComic;
  try {
    var comments = await md.comment
      .find({ idComic: idComic })
      .populate("comic");
    if (comments) {
      return res
        .status(200)
        .json({
          status: 200,
          data: comments,
          message: "get data successfully",
        });
    } else {
      return res.status(401).json({ status: 401, message: "not found" });
    }
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
};

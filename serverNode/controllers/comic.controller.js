const md = require("../models/comic.model");

exports.getData = async (req, res, next) => {
  try {
    var data = await md.comic.find();
    if (data) {
      return res
        .status(200)
        .json({ status: 200, data: data, message: "get data successfully" });
    } else {
      return res.status(401).json({ status: 401, message: "not found" });
    }
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
};

exports.addComic = async (req, res, next) => {
  try {
    const comic = new md.comic(req.body);
    console.log(comic);
    let data = await comic.save();
    console.log("add comic successfully");
    return res.status(201).json({
      status: 201,
      data: data,
      message: "Image added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

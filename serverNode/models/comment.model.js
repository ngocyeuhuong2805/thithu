const db = require("./connectDB");
const comic = require("./comic.model");

const commentSchema = new db.mongoose.Schema(
  {
    idComic: { type: db.mongoose.Schema.ObjectId, ref: "comic" },
    idUser: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

let comment = db.mongoose.model("comment", commentSchema);
module.exports = {
  comment,
};

const db = require("./connectDB");

const comicSchema = new db.mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    author: { type: String, required: true },
    art: { type: String, required: true },
    stories: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

let comic = db.mongoose.model("comic", comicSchema);
module.exports = {
  comic,
};

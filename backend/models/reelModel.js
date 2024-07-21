const mongoose = require("mongoose");
const { Schema } = mongoose;

const reelSchema = new Schema({
  thumbnail: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },
  profileName: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
});

const Reel = mongoose.model("Reel", reelSchema);
module.exports = Reel;

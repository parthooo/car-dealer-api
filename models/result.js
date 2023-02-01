const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resultSchema = new Schema({
  query_id: {type: mongoose.Types.ObjectId, required:false, ref : 'query'},
  name: { type: String, required: false },
  challenges: { type: String, required: false },
  ideas: { type: String, required: false },
  marketing: { type: String, required: false },
  websites: { type: String, required: false },
  software_companies: { type: String, required: false },
  url: { type: String, required: false },
  token: { type: String, required: false, unique: true },
  domain_name: { type: String, required: false, unique: true },
});

module.exports = mongoose.model("result", resultSchema);

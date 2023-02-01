const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const querySchema = new Schema({
  name: { type: String, required: false },
  size: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false },
  type: { type: String, required: false },
  framework: { type: String, required: false },
  email: { type: String, required: false },
  unique_url_code: { type: String, required: false },
  first_prompt: { type: String, required: false },
  second_prompt: { type: String, required: false },
  third_prompt: { type: String, required: false },
  fourth_prompt: { type: String, required: false },
  fifth_prompt: { type: String, required: false },
  token : { type: String, required: false },
  short_url: { type: String, required: false },
  full_url: { type: String, required: false },
  domain_name: { type: String, required: false },
});

module.exports = mongoose.model("query", querySchema);

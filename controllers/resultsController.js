const moment = require("moment");
const fs = require("fs");
const mongoose = require("mongoose");
const crypto = require("crypto");
const url = require("url");
const Query = require("../models/query");
const Result = require("../models/result");
const sgMail = require("@sendgrid/mail");

const locale = require("../locale");
const {
  postStatus,
  userRoles,
  postStatusMessages,
  userRolesID,
} = require("../config");

const saveQuery = async (req, res, next) => {
  const {
    name,
    size,
    type,
    city,
    state,
    framework,
    first_prompt,
    second_prompt,
    third_prompt,
    fourth_prompt,
    fifth_prompt,
    token,
    full_url,
    short_url,
    domainName,
  } = req.body;

  const createdResult = new Query({
    name: name,
    size: size,
    city: city,
    state: state,
    type: type,
    framework: framework,
    first_prompt: first_prompt,
    second_prompt: second_prompt,
    third_prompt: third_prompt,
    fourth_prompt: fourth_prompt,
    fifth_prompt: fifth_prompt,
    token: token,
    short_url: short_url,
    full_url: full_url,
    domain_name: domainName,
  });
  try {
    const response = await createdResult.save();
    return response;
  } catch (err) {
    console.log(err);
  }
};

const saveResult = async (req, res, next) => {
  const {
    ideas,
    challenges,
    marketing,
    websites,
    software_companies,
    token,
    name,
    domainName,
  } = req.body;
  const existing = await Result.find({ token: token });
  if (existing.length !==0) {
    return res.send({
      errorMessage: "Data already exists",
    });
  } else {
    const createdResult = new Result({
      name: name,
      ideas: ideas,
      challenges: challenges,
      marketing: marketing,
      websites: websites,
      software_companies: software_companies,
      token: token,
      domain_name: domainName,
    });
    if (software_companies !== undefined) {
      try {
        const response = await createdResult.save();
          return response;
      } catch (err) {
          
           return err; 
      }
    }
  }
};

const fetchResult = async (req, res, next) => {
  const { token } = req.body;
  const result = await Result.find({ token: token });
  return res.send({
    data: result,
  });
};

const fetchQuery = async (req, res, next) => {
  const { token } = req.body;
  const result = await Query.find({ token: token });
  return res.send({
    data: result,
  });
};

module.exports = {
  saveQuery,
  saveResult,
  fetchResult,
  fetchQuery,
};

const express = require("express");
const { authenticateToken } = require("../middlewares/login");
const { sanitizeinputs } = require("../middlewares/index");
const { uploadImage } = require("../middlewares/imageUpload");
const {permit, postViewPermit} = require("../middlewares/permission");

const router = express.Router();

const resultsController =require("../controllers/resultsController");

router.post("/saveQuery", resultsController.saveQuery );
router.post("/saveResult", resultsController.saveResult);
router.post("/fetchResult", resultsController.fetchResult);
router.post("/fetchQuery", resultsController.fetchQuery);



module.exports = router;


var express = require('express');
var router = express.Router();
var { upload } = require("../../helpers/file-upload");
var { resizeImage } = require("../../helpers/file-resize");
const taskController = require('../controllers/task.controller');

/* GET list. */
router.get('/', taskController.getjson);

/* post data. */
router.post('/upload', [upload().single("file"), resizeImage], taskController.create);

/* GET list. */
router.get('/data/:date', taskController.list);


module.exports = router;
var express = require('express');
var router = express.Router();
var accountController = require('../controllers/accountController')
var lessonController = require('../controllers/lesonController')

/* GET users listing. */
router.get('/:id', accountController.renderHomepage);

router.get('/create-page/:id', lessonController.renderCreatePage);

router.post('/create-new-lesson/:id', lessonController.createNewLesson);

router.get('/delete-lesson/:account/:lesson', lessonController.deleteLesson)

router.get('/update-page/:account/:lesson', lessonController.renderUpdatePage)

router.post('/update-lesson/:account/:lesson', lessonController.updateLesson);

router.get('/learn-page/:account/:lesson', lessonController.renderLearnPage);

module.exports = router;

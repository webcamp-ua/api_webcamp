var express = require('express');
var router = express.Router();
var CoursesController = require('../controllers/CoursesController');
const COURSES = "/courses";

var coursesController = new CoursesController();
router.get("/", (req, res, next)=> {
    res.send("API");
});


router.get(COURSES, coursesController.list);
router.get(`${COURSES}/:id`, coursesController.read);
router.post(COURSES, coursesController.create);
router.put(`${COURSES}/:id`, coursesController.update);
router.delete(`${COURSES}/:id`, coursesController.delete);

router.get("/error", (req, res, next)=> {
    next(new Error("ERROR"));
});

module.exports = router;
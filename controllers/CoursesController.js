var mongoose = require('mongoose');
var CourseDB = mongoose.model('Course');
var Course = require('../models/Course');

class CoursesController {
    constructor() {

    }

    list(req, res, next) {
        CourseDB.find({}, (err, _courses)=> {
            if (err) next(err);
            res.json(_courses);
        });
    }

    create(req, res, next) {
        CourseDB.create(req.body, (_err, _course)=> {
            if (_err) next(_err);
            res.json(_course);
        });
    }

    read(req, res, next) {
        let id = req.param('id');
        CourseDB.findById(id, (err, _course)=> {
            if (err) next(err);
            res.json(_course);
        });
    }

    update(req, res, next) {
        let id = req.param('id');
        CourseDB.findByIdAndUpdate(id, req.body, {new: true, runValidators: true}, (err, _course)=> {
            if (err) next(err);
            res.json(_course);
        });
    }

    delete(req, res, next) {
        let id = req.param('id');
        CourseDB.findByIdAndRemove(id, (err, _course)=> {
            if (err) next(err);
            res.json(_course);
        });
    }


}

module.exports = CoursesController;
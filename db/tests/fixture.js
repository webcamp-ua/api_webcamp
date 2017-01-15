require('../index');
var mongoose = require('mongoose');
var Course = require('../../models/Course');
class DBFixture {
    constructor() {

        this.courses = [new Course('javascript basic', 'js_basic', '', '', [], 40, 1, 0, [], ''),
            new Course('javascript DOM', 'js_dom', '', '', [], 40, 1, 1, [], ''),
            new Course('javascript advanced', 'js_adv', '', '', [], 40, 1, 3, [], ''),
            new Course('php basic', 'php_basic', '', '', [], 40, 2, 0, [], ''),
            new Course('frontend basic', 'fe_basic', '', '', [], 40, 1, 0, [], '')];
        this.testMail = 'test@mail.o';
    }

    coursesFixture(done) {
        let CourseDB = mongoose.model('Course');

        CourseDB.remove({}, (err)=> {
            if (err) {
                done(err);
            }

            CourseDB.create(this.courses, (_err, _courses)=> {
                if (_err) done(_err);
                done(_err, _courses);
            });
        });
    }

    scheduleFixture(courseId, done) {
        let ScheduleDB = mongoose.model('Schedule');
        let Schedule = require('../../models/Schedule');
        ScheduleDB.remove({}, (err)=> {
            if (err)done(err);
            let schedule = new Schedule(courseId, new Date(), [0]);
            ScheduleDB.create(schedule, (er, _schedule)=> {
                done(er, _schedule);
            });
        })
    }

    studentFixture(done) {
        let StudentDB = mongoose.model('Student');
        let Student = require('../../models/Student');
        StudentDB.remove({}, (err)=> {
            if (err) done(err);
            StudentDB.create(new Student('Test', this.testMail), (_err, _student)=>done(_err, _student));
        });
    }

    enrollFixture(courseId, scheduleId, studentId, done) {
        let EnrollDB = mongoose.model('Enroll');
        let Enroll = require('../../models/Enroll');
        let enroll = new Enroll(courseId, scheduleId, studentId);
        enroll.generateBill();
        EnrollDB.remove({}, (err)=> {
            if (err) done(err);
            EnrollDB.create(enroll, (_err, _enroll)=>done(_err, _enroll));
        });
    }
}
module.exports = DBFixture;
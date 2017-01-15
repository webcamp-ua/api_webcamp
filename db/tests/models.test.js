require('../index');
var mongoose = require('mongoose');
var CourseDB = mongoose.model('Course');
var Course = require('../../models/Course');
var expect = require('chai').expect;
var DBFixture = require('./fixture');
describe('create and query test data', ()=> {
    let courseId;
    let schedule;
    let student;
    let enroll;
    let fixture;
    before((done)=> {
        fixture = new DBFixture();
        fixture.coursesFixture((err, courses)=> {
            courseId = courses[0]._id;
            done(err);
        });
    });

    it('should find created models', (done)=> {
        CourseDB.find({}, (err, _courses)=> {
            if (err) done(err);
            expect(_courses).to.have.lengthOf(fixture.courses.length);
            done();
        });
    });
    it('should find first model', (done)=> {
        CourseDB.findById(courseId, (err, _course)=> {
            if (err) done(err);

            expect(_course).to.not.be.undefined;
            done();
        });
    });
    it('should create schedule with course id', (done)=> {
        fixture.scheduleFixture(courseId, (err, _schedule)=> {
            schedule = _schedule;
            expect(schedule.courseId).to.eql(courseId);
            done(err);
        });
    });
    it('should create student with test email', (done)=> {
        fixture.studentFixture((err, _student)=> {
            student = _student;
            expect(student.email).to.equal(fixture.testMail);
            done(err);
        });
    });

    it('should enroll student to the course', (done)=> {
        fixture.enrollFixture(courseId, schedule._id, student._id, (err, _enroll)=> {
            enroll = _enroll;
            mongoose.model('Student').findById(student._id, (err, _student)=> {
                expect(_student.enrolls).to.have.lengthOf(1);
                done(err);
            });
        });
    });

    it('should generate bill in the enroll', ()=> {
        expect(enroll.bill).to.not.be.undefined;
    });

});
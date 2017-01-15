var Model = require('./Model');
class Enroll extends Model {
    constructor(courseId, scheduleId, studentId, bill) {
        super();
        this.courseId = courseId;
        this.scheduleId = scheduleId;
        this.studentId = studentId;
        this.bill = bill;
    }

    generateBill() {
        this.bill = Buffer.from(this.courseId + ":" + this.scheduleId + ":" + this.studentId).toString('base64');
    }
}

module.exports = Enroll;
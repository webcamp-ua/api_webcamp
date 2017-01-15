var Model = require('./Model');

class Schedule extends Model {
    constructor(courseId, start, days, price = 0) {
        super();
        this.courseId = courseId;
        this.start = start;
        this.days = days;
        this.price = price;
    }
}

module.exports = Schedule;
var Model = require('./Model');

class Student extends Model{
    constructor(name, email, phone, comment, how, enrolls) {
        super();
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.comment = comment;
        this.how = how;
        this.enrolls = enrolls;
    }
}
module.exports = Student;
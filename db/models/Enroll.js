var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EnrollSchema = new Schema({
    courseId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    scheduleId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    studentId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    bill: {
        type: String
    }
});
EnrollSchema.post('validate', (doc, next)=>{
    let Student = mongoose.model('Student');
    Student.findByIdAndUpdate(doc.studentId, {"$push":{"enrolls":doc._id}}, (err, student)=> {
        next(err, student);
    });
});
mongoose.model('Enroll', EnrollSchema);
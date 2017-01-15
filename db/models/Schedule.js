var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScheduleSchema = new Schema({
    courseId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    days: {
        type: [Number],
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
mongoose.model('Schedule', ScheduleSchema);

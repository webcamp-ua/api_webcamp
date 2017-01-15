var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    name: {type: String},
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {type: String},
    comment: {type: String},
    how: {type: String},
    enrolls: {type: [Schema.Types.ObjectId]}
});
mongoose.model('Student', StudentSchema);
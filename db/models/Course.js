var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CourseSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    alias: {
        type: String,
        required: true,
        unique: true
    },
    metadesc: {
        type: String
    },
    description: {
        type: String
    },
    results: {
        type: [String]
    },
    duration: {
        type: Number
    },
    track: {
        type: Number,
        min: 0
    },
    level: {
        type: Number,
        min: 0,
        max: 5
    },
    requirements: {
        type: [String]
    },
    intro_video: {
        type: String
    },
    value: {
        type: Number, min: 0
    }
});

mongoose.model('Course', CourseSchema);
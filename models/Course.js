var Model = require('./Model');

class Course extends Model {
    constructor(name, alias, metadesc, description, results, duration, track, level, requirements, intro_video, value) {
        super();
        this.name = name;
        this.alias = alias;
        this.metadesc = metadesc || "";
        this.description = description || "";
        this.results = results || [];
        this.duration = duration || 0;
        this.track = track;
        this.level = level || 0;
        this.requirements = requirements || [];
        this.intro_video = intro_video || "";
        this.value = value || 0;
    }
}

module.exports = Course;
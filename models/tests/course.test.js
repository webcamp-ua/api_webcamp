var expect = require('chai').expect;
var Course = require('../Course');

describe('Model creation', ()=> {
    let course = {
        "name": "javascript DOM",
        "alias": "js_dom",
        "metadesc": "",
        "description": "",
        "results": [],
        "duration": 40,
        "track": 1,
        "level": 1,
        "requirements": [],
        "intro_video": ''
    };
    it('should create Course from json', ()=> {
        var actual = Course.fromJSON(course, Course);
        expect(actual).to.be.instanceOf(Course);
        expect(actual.duration).to.eq(40);
    });
});
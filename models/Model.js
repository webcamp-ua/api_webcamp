class Model {
    static fromJSON(json = {}) {
        let model = Object.create(this.prototype);
        Object.assign(model, json);
        return model;
    }
}

module.exports = Model;
class JSHElementList {
    constructor(list) {
        this.elements = [];

        list.forEach((x) => {
            this.elements.push(x);
        })
        return this;
    }

    on (action, callback) {
        this.elements.forEach((x) => {
            x.on(action, callback);
        })
        return this
    }

    style (action, data) {
        this.elements.forEach((x) => {
            x.style(action, data);
        })
        return this;
    }
}

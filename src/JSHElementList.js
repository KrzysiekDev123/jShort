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

    style (data) {
        this.elements.forEach((x) => {
            x.style(data);
        })
        return this;
    }
}

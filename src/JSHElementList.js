class JSHElementList {
    constructor(list) {
        this.elements = [];

        list.forEach((x) => {
            this.elements.push(x);
        })
    }

    on (action, callback) {
        this.elements.forEach((x) => {
            x.on(action, callback);
        })
    }

    style (action, data) {
        this.elements.forEach((x) => {
            x.style(action, data);
        })
    }
}

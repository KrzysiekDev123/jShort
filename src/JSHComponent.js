class JSHComponent {
    constructor (props, elements) {
        this.elements = elements;
        props = props || {};
        this.props = props;
        let container = makeElement('div', '', props);

        for (let element of this.elements) {
            container.append(element);
        }

        this.container = container;
        this.element = container.element;
        
    }

    addElement(element) {
        this.container.append(element);
        return this;
    }

    kill() {
        this.container.kill();
    }

    html(content) {
        this.container.html(content);
        return this;
    }

    style(data) {
        this.container.style(data);
        return this;
    }
}
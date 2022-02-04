class JSHComponent {
    constructor (props, elements) {
        this.elements = elements;
        let container = makeElement('div', '', props);

        for (let element of this.elements) {
            container.append(element);
        }

        this.container = container;
        this.element = container.element;
        
    }

    addElement(element) {
        this.container.append(element)
    }

    kill() {
        this.container.kill();
    }
}
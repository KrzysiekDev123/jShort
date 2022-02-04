class JSHComponent {
    constructor (props, elements) {
        this.elements = elements;
        let container = makeElement('div', '', props);

        /*for (let prop of props) {
            container.element.setAttribute(prop[0], prop[1]);
        }*/

        for (let element of this.elements) {
            container.append(element);
        }

        this.element = container.element;
        this.container = container;
    }
}
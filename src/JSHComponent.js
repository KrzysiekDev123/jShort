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

    refresh() {
        for (let child of this.container.children) {
            let c = child;
            let index = this.container.children.indexOf(child);

            console.log(child)
            child.kill();

            let copied = Object.assign({}, c);
            console.log(copied)
            this.container.element.appendChild(copied.element);
            this.container.children[index] = copied;
        }
    }
}
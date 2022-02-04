class JSHElement {
    constructor (config) {
        let tag = config.tag;
        let body = config.body;
        let props = config.props;
        let element = config.element;

        if (element == null) {
            let el = document.createElement(tag);

            if (body != null) el.innerHTML = body;

            if (props != null) {for (let propName of Object.keys(props)) {
                el.setAttribute(propName, props[propName]);
            }}

            this.element = el;
        } else {
            this.element = element;
        }
    }

    on (action, callback) {
        this.element.addEventListener(action, callback);
        return this;
    }

    style (action, data) {
        switch (action) {
            case 'add':
                for (let propName of Object.keys(data)) {
                    this.element.style[propName] = data[propName];
                }
                break;

            case 'remove':
                for (let name of data) {
                    this.element.style.removeProperty(name);
                }
                break;

            default: throw new Error('Invalid action!');
        }
    }

    append(el) {
        console.log(el)
        this.element.appendChild(el.element)
    }
}

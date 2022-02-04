class JSHElement {
    constructor (config) {
        let tag = config.tag;
        let body = config.body;
        let props = config.props;
        let element = config.element;
        this.children = [];

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
        this.element.appendChild(el.element);
        this.children.push(el);
        return this;
    }

    kill() {
        this.element.remove();
    }

    html(content) {
        this.element.innerHTML = content
        return this;
    }

    bindAttribute(attribute, refVar, obj, conditions) {
        let last = refVar.value;

        setInterval(() => {
            if (last != refVar.value) {
                let index = -1;
                for (let i = 0; i < conditions.length; i++) {
                    if (eval(conditions[i].condition)) {
                        index = i;
                        break;
                    }
                }

                if (index == -1) throw new Error("No true condition found")

                let value = conditions[index].value.split('{#}');
 
                last = refVar.value;
                this.element[attribute] = value.join(refVar.value);
            }
        }, 50)
    }
}

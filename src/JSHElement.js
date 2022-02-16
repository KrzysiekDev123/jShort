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

    style (data) {
        if (data == null) return this.element.style;
        for (let propName of Object.keys(data)) {
            this.element.style[propName] = data[propName];
        }
        return this;
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

    bindAttribute(attribute, args, conditions) {
        function findTrueCondition() {
            let index = -1;
            for (let i = 0; i < conditions.length; i++) {
                if (conditions[i].condition()) {
                    index = i;
                    break;
                }
            }

            if (index == -1) throw new Error("No true condition found")
            return conditions[index].value();
        }

        
        setInterval(() => {
            this.element[attribute] = findTrueCondition();
        }, 50)
    }

    hover(enter, leave) {
        this.on('mouseover', () => {
            enter();
        })

        this.on('mouseleave', () => {
            leave();
        })
    }

    addBehavior(behavior) {
        behavior(this);
        return this;
    }

    set(param, value) {
        this.element[param] = value;
        return this
    }
}

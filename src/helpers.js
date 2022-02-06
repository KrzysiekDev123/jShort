function makeElement(tag, body, props) {
    return new JSHElement({
        tag: tag,
        body: body,
        props: props
    });
}

const ReferenceVariable = (value) => {
    let self = {
        value: value,

        sync: (expression) => {
            let interval = setInterval(() => {
                try {
                    let value = eval(expression)
                    self.value = value;
                } catch (e) {
                    clearInterval(interval);
                }
            }, 10)
            return self;
        },

        watch: (onChange) => {
            let last = self.value;
            setInterval(() => {
                if (self.value != last) {
                    last = self.value;
                    onChange();
                }
            }, 20)
            return self;
        }
    }

    return self;
}

const makeBindCondition = (condition, value) => {return {
    condition: condition,
    value: value
}}

function compareObjects(obj1, obj2) {
    for (let key of Object.keys(obj1)) {
        if (typeof obj1[key] == 'object') {
            if (!compareObjects(obj1[key], obj2[key])) return false;
        } else {
            if (obj1[key] !== obj2[key]) return false;
        }
    }

    return true;
}

function setTooltip(elem, text) {
    elem.element.title = text;
}
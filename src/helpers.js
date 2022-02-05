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
            setInterval(() => {
                let value = eval(expression)
                self.value = value;
            }, 10)
        },

        watch: (onChange) => {
            let last = self.value;
            setInterval(() => {
                if (self.value != last) {
                    last = self.value;
                    onChange();
                }
            }, 20)
        }
    }

    return self;
}

const makeBindCondition = (condition, value) => {return {
    "condition": condition,
    "value": value
}}

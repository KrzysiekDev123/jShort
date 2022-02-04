function makeElement(tag, body, props) {
    return new JSHElement({
        tag: tag,
        body: body,
        props: props
    });
}

const ReferenceVariable = value => {
    return {value: value}
}

const makeBindCondition = (condition, value) => {return {
    "condition": condition,
    "value": value
}}

const syncVariable = (refVar, expression) => {
    setInterval(() => {
        let value = eval(expression)
        refVar.value = value;
    }, 10)
}
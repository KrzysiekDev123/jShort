function makeElement(tag, body, props) {
    return new JSHElement({
        tag: tag,
        body: body,
        props: props
    });
}
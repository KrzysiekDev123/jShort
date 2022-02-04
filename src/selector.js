function S(selector, root) {
    let selected;

    if (root == null) {
        selected = document.querySelectorAll(selector);
    } else {
        selected = root.element.querySelectorAll(selector);
    }

    if (selected.length == 0) {
        return null;
    } else if (selected.length == 1) {
        let element = selected[0];

        return new JSHElement({
            tag: element.tagName,
            body: element.innerHTML,
            props: Array.from(element.attributes).map((prop) => [prop.name, prop.value]),
            element: element
        });
    } else {
        let elements = [];

        selected.forEach((element) => {
            elements.push(new JSHElement({
                tag: element.tagName,
                body: element.innerHTML,
                props: Array.from(element.attributes).map((prop) => [prop.name, prop.value]),
                element: element
            }));
        })

        return new JSHElementList(elements);
    }
}

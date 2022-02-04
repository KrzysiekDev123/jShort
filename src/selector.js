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

        let props = {};

        for (propName of element.attributes) {
            props[propName] = element.attributes[propName];
        }

        return new JSHElement({
            tag: element.tagName,
            body: element.innerHTML,
            props: props,
            element: element
        });
    } else {
        let elements = [];
        
        selected.forEach((element) => {
            let props = {};

            for (propName of element.attributes) {
                props[propName] = element.attributes[propName];
            }

            elements.push(new JSHElement({
                tag: element.tagName,
                body: element.innerHTML,
                props: props,
                element: element
            }));
        })

        return new JSHElementList(elements);
    }
}

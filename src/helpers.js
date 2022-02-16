function makeElement(tag, body, props) {
    return new JSHElement({
        tag: tag,
        body: body,
        props: props
    });
}


function watch(object, callback) {
    let storage = Object.assign({}, object);

    for (let key of Object.keys(object)) {
        Object.defineProperty(object, key, {
            get: () => storage[key],
            set: (value) => {
                storage[key] = value;
                callback();
            }
        })
    }
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

function ReferenceVariable(val) {
    let storageObject = { value: val }
    let self = {
        value: val,
        watch: (callback) => {
            Object.defineProperty(self, 'value', {
                get: () => storageObject.value,
                set: (value) => {
                    storageObject.value = value;
                    callback(value);
                }
            })
        },
        sync: (func) => {
            setInterval(() => {
                self.value = func();
            }, 50)
        }
    }

    return self;
}

/// CREDIT: @SilentImp from Stack Overflow https://stackoverflow.com/a/48226843/13612015 
function sanitize(string) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
        "`": '&grave;'
    };
    const reg = /[&<>"'/]/ig;
    return string.replace(reg, (match)=>(map[match]));
  }
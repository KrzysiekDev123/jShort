// Class SearchBar extends JSHComponent
class SearchBar extends JSHComponent {
    // `props` is an object with properties like id or class.
    // `number` is a custom parameter used by this class 
    constructor (props, number) {
        let tbId = number;

        // Creating textBox with makeElement()
        let textBox = makeElement('input', '', {
            placeholder: `Search bar ${tbId}`,
            class: 'textBox',
            id: `tb${tbId}`
        })

        // Creating button with makeElement()
        let button = makeElement('button', 'OK');

        // Adding a `click` event listener to the button
        button.on('click', () => {
            // textBox.element is the DOM Node
            alert(textBox.element.value);
        })

        // Calling JSHComponent constructor with props and list of elements
        super(props, [
            textBox,
            button
        ]);
    }
}

// 5 times:
for (let i = 0; i < 5; i++) {
    // Creating a SearchBar from the class
    // parameter 1: props
    // parameter 2: number
    let sb = new SearchBar({
        id: `sb${i+1}`
    }, i+1);
    
    // Appending the component to the <body> tag
    S('body').append(sb);
}
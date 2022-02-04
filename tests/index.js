class SearchBar extends JSHComponent {
    constructor (props, number) {
        let tbId = number;

        let textBox = makeElement('input', '', {
            placeholder: `Search bar ${tbId}`,
            class: 'textBox',
            id: `tb${tbId}`
        })

        let button = makeElement('button', 'OK');

        button.on('click', () => {
            alert(textBox.element.value);
        })

        super(props, [
            textBox,
            button
        ]);
    }
}

for (let i = 0; i < 5; i++) {
    let sb = new SearchBar({
        id: `sb${i+1}`
    }, i+1);
    
    S('body').append(sb);
}
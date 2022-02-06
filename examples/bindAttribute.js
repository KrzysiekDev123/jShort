class clickCounter extends JSHComponent {
    constructor(props) {
        let button = makeElement('button', 'Click me!');
        let text = makeElement('p');
        
        super(props, [button, text]);

        let data = {
            clicks: 0
        }

        text.bindAttribute('innerHTML', data, [
            makeBindCondition(() => (data.clicks == 0), () => 'Click the button'),
            makeBindCondition(() => data.clicks % 2 == 0 ? true : false, () => `${data.clicks} Even`),
            makeBindCondition(() => true, () => `${data.clicks} Odd`)
        ]);

        button.on('click', () => {
            data.clicks++;
        })
    }
}

S('body').append(new clickCounter())
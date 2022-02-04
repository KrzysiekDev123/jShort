class clickCounter extends JSHComponent {
    constructor(props) {
        // Creating elements
        let button = makeElement('button', 'Click me!');
        let text = makeElement('p', 'Please click the button');
        // Passing them to the JSHComponent's constructor
        super(props, [button, text]);

        // Creating a ReferenceVariable
        this.clicks = ReferenceVariable(0);

        // text.innerHTML will equal: "<clicks> Even", if 'clicks' is even, and "<clicks> Odd" if 'clicks' is odd.
        text.bindAttribute('innerHTML', this.clicks, this, [
            makeBindCondition('obj.clicks.value % 2 == 0', '{#} Even'),
            makeBindCondition('true', '{#} Odd')
        ]);

        button.on('click', () => {
            this.clicks.value++;
        })
    }
}

S('body').append(new clickCounter())
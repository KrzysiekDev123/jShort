class inputWithParagraph extends JSHComponent {
    constructor(props) {
        let input = makeElement('input');
        let text = makeElement('span');
        super(props, [input, text]);

        // Creating a ReferenceVariable
        let inputContent = ReferenceVariable();
        // inputContent will sync with S('input').element.value
        inputContent.sync("S('input').element.value")

        // Binding text's innerHTML to 'Text in the text box: <inputContent>'
        text.bindAttribute('innerHTML', inputContent, this, [
            makeBindCondition('true', 'Text in the text box: {#}')
        ])

        text.style({'margin-left': '30px'})
    }
}

S('body').append(new inputWithParagraph())
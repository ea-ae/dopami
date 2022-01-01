import React from 'react';

import Code from './code';



export default class Register extends React.Component<{}, {}> {
    addForm() {
        const root = document.getElementById('code'); // refs bug, only apparent fix
        let code = root!.children[0].children[0];
        
        // prism callbacks don't actually work, so we'll manually wait
        // for new children with a mutation observer

        this.addFormInputs(code);
        let observer = new MutationObserver((mutations) => {
            //for (let mutation of mutations) {
            if (this.addFormInputs(code)) observer.disconnect();
        })
        observer.observe(code, { childList: true }); // wait for changes
    }

    addFormInputs(parentElement: Element): boolean {
        const selector = 'span.token.string:not(.triple-quoted-string)';
        const inputElement = '<input type="text">';
        let successful = false;

        let found = Array.from(parentElement.querySelectorAll(selector));
        for (let child of found) {
            successful = true;
            let field = child.previousSibling!.previousSibling!.previousSibling!.textContent!.trim();
            
            // create input box
            let input = document.createElement('span');
            input.innerHTML = inputElement.trim();

            // create second quote
            child.textContent = `'`;
            let secondQuote = child.cloneNode(true);

            // append elements
            const nextSibling = child.nextSibling;
            parentElement.insertBefore(input, nextSibling);
            parentElement.insertBefore(secondQuote, nextSibling);
        }
        return successful;
    }

    render() {
        // """Uncompetitive programming games"""
        const source_code = `
            # login/register below by filling out the
            # 2/4 attributes: this text is editable!

            class LrmIpsm:
                """Lorem ipsum dolor sit amet."""
                @classmethod
                def join(human):
                    self.auth(human)

            # login
            you.username = ''
            you.password = ''

            # ... and register?
            you.confirm_pw = ''
            you.email_addr = ''`

        return (
            <Code code={source_code} language='python' onHighlight={() => this.addForm()} />
        );
    }
}

import React from 'react';

import Code from './code';


type RegisterProps = {}

export default class Register extends React.Component<RegisterProps, {}> {
    registerRef: React.RefObject<HTMLDivElement>;

    constructor(props: RegisterProps) {
        super(props);
        this.registerRef = React.createRef();
    }

    addForm() {
        console.log('addForm');
        // console.log(this.registerRef); // undefined

        const root = document.getElementById('code'); // refs bug, only apparent fix
        let code = root!.children[0].children[0].children[0];

        console.log(code);
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
            <div ref={this.registerRef}>
                <Code code={source_code} language='python' onHighlight={this.addForm} />
            </div>
        );
    }
}

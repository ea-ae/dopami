import React from 'react'

import Code from './code'


type RegisterProps = {}

export default class Register extends React.Component<RegisterProps, {}> {
    registerRef: React.RefObject<any>;

    constructor(props: RegisterProps) {
        super(props);
        this.registerRef = React.createRef();
    }

    addForm() {
        console.log('addForm');
        console.log(this.registerRef);
    }

    render() {
        const source_code = `
            # login/register below by filling out the
            # 2/4 attributes: this text is editable!

            class LrmIpsm:
                """Uncompetitive programming games"""
                @classmethod
                def join(human):
                    self.auth(human)

            # login
            you.username = ''
            you.password = ''

            # ... and register?
            you.confirm_pass  = ''
            you.email_address = ''`

        return (
            <div ref={this.registerRef}>
                <Code code={source_code} language='python' onHighlight={this.addForm} />
            </div>
        );
    }
}

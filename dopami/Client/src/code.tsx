import React from 'react';
import ReactDOM from 'react-dom';
import Prism from 'prismjs';
import 'prismjs/plugins/autoloader/prism-autoloader';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prism-themes/themes/prism-one-dark.css';


type CodeProps = {
    code: string;
    language: string;
    onHighlight: () => any;
}

export default class Code extends React.Component<CodeProps, {}> {
    codeRef: React.RefObject<any>;

    constructor(props: CodeProps) {
        super(props);
        this.codeRef = React.createRef();

        Prism.plugins.autoloader.languages_path = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/components/';
        Prism.plugins.NormalizeWhitespace.setDefaults({
            'remove-indent': true,
            'left-trim': true,
            'right-trim': true,
            'remove-trailing': true,
        });
    }

    componentDidMount() {
        this.highlight();
    }

    componentDidUpdate() {
        this.highlight();
    }

    highlight() {
        setTimeout(() => Prism.highlightElement(this.codeRef.current, false, this.props.onHighlight), 0);
    }

    render() {
        return (
            <pre className='focus:outline-0'>
                <code key='code' ref={this.codeRef} className={`select-none cursor-default text-md language-${this.props.language}`}>
                    {this.props.code}
                </code>
            </pre>
        );
    }
}

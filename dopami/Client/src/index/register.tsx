import React from 'react';

// import Code from './code';
import './manual-prism.css'


export default class Register extends React.Component<{}, {}> {
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

        // This used to be generated automatically, but in this case, we are going to be inserting the
        // automatically generated HTML automatically. This is ultimately cleaner because it allows us
        // to bypass the mess we had when we attempted to manually manipulate the DOM in an ugly way to
        // bypass some of the library's restrictions.
        return (
            <>
            <span className="token comment"># login/register below by filling out the</span>{'\n'}
            <span className="token comment"># 2/4 attributes: this text is editable!</span>{'\n'}
            <span className="token keyword">class </span>
            <span className="token className-name">LrmIpsm</span>
            <span className="token punctuation">:</span>{'\n'}
            <span className="token triple-quoted-string string">    """Lorem ipsum dolor sit amet."""</span>{'\n'}
            <span className="token decorator annotation punctuation">    @staticmethod</span>{'\n'}
            <span className="token keyword">    def </span><span className="token function">join</span>
            <span className="token punctuation">(</span><span className="token self">self</span>, human
            <span className="token punctuation">)</span><span className="token punctuation">:</span>{'\n'}
            <span className="token self">        self</span><span className="token punctuation">.</span>auth
            <span className="token punctuation">(</span>human<span className="token punctuation">)</span>{'\n\n'}

            <span className="token comment"># login</span>{'\n'}
            you<span className="token punctuation">.</span>username
            <span className="token operator"> = </span>
            <span className="token string">'</span><span className="token string">'</span>{'\n'}
            you<span className="token punctuation">.</span>password
            <span className="token operator"> = </span>
            <span className="token string">'</span><span className="token string">'</span>{'\n'}{'\n'}

            <span className="token comment"># ... and register?</span>{'\n'}
            you<span className="token punctuation">.</span>confirm_pw
            <span className="token operator"> = </span>
            <span className="token string">'</span><span className="token string">'</span>{'\n'}
            you<span className="token punctuation">.</span>email_addr
            <span className="token operator"> = </span>
            <span className="token string">'</span><span className="token string">'</span>
            </>
        );
    }
}

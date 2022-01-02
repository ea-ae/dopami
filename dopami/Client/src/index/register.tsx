import React, { useRef } from 'react';

// import Code from './code';
import './manual-prism.css'


const Register = () => {
    return (
        <>
        <div className='h-fit-content p-2 bg-[#0A0A1A] text-slate-300'>
            <pre className='m-3 tracking-tight leading-6 text-md'>
                <code className='m-0 font-consolas select-none cursor-default text-md language-py'>
                    <RegisterCode />
                </code>
            </pre>
        </div>
        <RegisterButton />
        </>
    );
}

const RegisterCode = () => {
    // """Uncompetitive programming games"""

    // This used to be generated automatically, but in this case, we are going to be inserting the
    // automatically generated HTML automatically. This is ultimately cleaner because it allows us
    // to bypass the mess we had when we attempted to manually manipulate the DOM in an ugly way to
    // bypass some of the library's restrictions.
    return (
        <>
        <span className='token comment'># login/register below by filling out the</span>{'\n'}
        <span className='token comment'># 2/4 attributes: this text is editable!</span>{'\n'}
        <span className='token keyword'>class </span>
        <span className='token className-name'>LrmIpsm</span>
        <span className='token punctuation'>:</span>{'\n'}
        <span className='token triple-quoted-string string'>    '''Lorem ipsum dolor sit amet.'''</span>{'\n'}
        <span className='token decorator annotation punctuation'>    @staticmethod</span>{'\n'}
        <span className='token keyword'>    def </span><span className='token function'>join</span>
        <span className='token punctuation'>(</span><span className='token self'>self</span>, human
        <span className='token punctuation'>)</span><span className='token punctuation'>:</span>{'\n'}
        <span className='token self'>        self</span><span className='token punctuation'>.</span>auth
        <span className='token punctuation'>(</span>human<span className='token punctuation'>)</span>{'\n\n'}

        <span className='token comment'># login</span>{'\n'}
        <RegisterInput label='username' index={1} censor={false} />
        <RegisterInput label='password' index={2} censor={true} />{'\n'}

        <span className='token comment'># ... and register?</span>{'\n'}
        <RegisterInput label='confirm_pw' index={3} censor={true} />
        <RegisterInput label='email_addr' index={4} censor={false} />
        </>
    );
}

const RegisterInput = ({label, index, censor}: {label: string, index: number, censor: boolean}) => {
    const inputRef = useRef<HTMLElement>(null);

    const focusInput = () => {
        if (inputRef.current) inputRef.current.focus();
    }

    return (
        <div onClick={focusInput} className='cursor-text select-none'>
        you<span className='token punctuation'>.</span>{label}
        <span className='token operator'> = </span>
        <span className='token string'>'</span>
            <span ref={inputRef} className='token string select-text focus:outline-0'
                  tabIndex={index} contentEditable='true'></span>
        <span className='token string'>'</span>
        </div>
    );
}

const RegisterButton = () => {
    const handleRegistration = () => {
        console.log('handleRegistration');
    }

    return (
        <div onClick={handleRegistration}
             className='py-3 border border-solid border-violet-500 font-roboto-mono text-xl text-center text-slate-100
                        bg-violet-700 hover:bg-[#7430E2] transition-colors duration-200 select-none cursor-pointer'>
            <span className='z-20' tabIndex={5}>LrmIpsm.join(you)</span>
        </div>
    );
}

export default Register;

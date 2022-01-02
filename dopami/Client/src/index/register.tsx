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
        <span className='token comment'># login/register by filling out the strings</span>{'\n'}
        <span className='token comment'># (the attributes are editable!)</span>{'\n'}
        <span className='token keyword'>class </span>
        <span className='token className-name'>LrmIpsm</span>
        <span className='token punctuation'>:</span>{'\n'}
        <span className='token triple-quoted-string string'>    """Lorem ipsum dolor sit amet."""</span>{'\n'}
        <span className='token decorator annotation punctuation'>    @staticmethod</span>{'\n'}
        <span className='token keyword'>    def </span><span className='token function'>join</span>
        <span className='token punctuation'>(</span><span className='token self'>self</span>, human
        <span className='token punctuation'>)</span><span className='token punctuation'>:</span>{'\n'}
        <span className='token self'>        self</span><span className='token punctuation'>.</span>auth
        <span className='token punctuation'>(</span>human<span className='token punctuation'>)</span>{'\n\n'}

        <span className='token comment'># login?</span>{'\n'}
        <RegisterInput label='username' type='text' index={1} />
        <RegisterInput label='password' type='password' index={2} />{'\n'}

        <span className='token comment'># ... and register?</span>{'\n'}
        <RegisterInput label='confirm_pw' type='password' index={3} />
        <RegisterInput label='email_addr' type='email' index={4} />
        </>
    );
}

type RegisterInputProps = {
    label: string;
    type: string;
    index: number;
}

const RegisterInput = ({label, type, index}: RegisterInputProps) => {
    // const inputRef = useRef<HTMLElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const maxLength = type == 'text' ? 20 : 60;
    let pattern = /.*/;
    if (type == 'text') {
        pattern = /^[A-Za-z0-9]{4,20}$/;
    } else if (type == 'password') {
        pattern = /^.{8,60}$/;
    }

    const focusInput = () => {
        if (inputRef.current) inputRef.current.focus();
        // if (inputRef.current) inputRef.current.focus();
        // <span ref={inputRef} className='token string select-text focus:outline-0'
        //       tabIndex={index} contentEditable='true' role='textbox'></span>
    }

    const resizeInput = () => { // props to https://codepen.io/shshaw
        if (inputRef.current) {
            const parent = inputRef.current.parentNode! as HTMLElement;
            parent.dataset.value = inputRef.current.value.substring(0, 20); // max width
        }
    }

    return (
        <div onClick={focusInput} className='max-w-full overflow-hidden cursor-text select-none'>
        me<span className='token punctuation'>.</span>{label}
        <span className='token operator'> = </span>
        <span className='token string'>'</span>
        <span className='input-sizer'>
            <input ref={inputRef} type={type} size={1} pattern={pattern.source}
                   maxLength={maxLength} placeholder='?' onInput={resizeInput} required />
        </span>
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
            <span className='z-20' tabIndex={5} onKeyPress={handleRegistration}>LrmIpsm.join(me)</span>
        </div>
    );
}

export default Register;

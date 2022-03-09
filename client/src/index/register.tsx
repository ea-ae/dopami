import React, { useRef } from 'react';

import './manual-prism.css'


const Register = () => {
    const handleRegistration = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            username: { value: string };
            password: { value: string };
            confirm_pw: { value: string };
            email_addr: { value: string };
        };
        console.log(target.username.value);
    };

    return (
        <>
        <form className='shadow-md shadow-neutral-900/50' onSubmit={handleRegistration}>
            <div className='h-fit-content p-2 bg-[#0A0A1A] text-slate-300'>
                <pre className='m-3 tracking-tight leading-snug leading-6 text-md'>
                    <code className='m-0 font-consolas select-none cursor-default text-md language-py'>
                        <RegisterCode />
                    </code>
                </pre>
            </div>
            <RegisterButton />
        </form>
        <div className='mt-2 py-3 font-roboto-mono text-md text-center text-neutral-400 select-none'>
            <a className='pr-3 text-md hover:text-neutral-200 transition-colors' href='/app'>play_as_guest()</a>
            <a className='pl-3 text-md hover:text-neutral-200 transition-colors' href='/forgot'>forgot_password()</a>
        </div>
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
        <span className='token comment'># fill out the strings to login/register</span>{'\n'}
        <span className='token comment'># (the variables are editable!)</span>{'\n'}
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
    const inputRef = useRef<HTMLInputElement>(null);
    const maxLength = type == 'text' ? 20 : 60;

    let pattern = /.*/;
    if (type == 'text') {
        pattern = /^[A-Za-z0-9]{4,20}$/;
    } else if (type == 'password') {
        pattern = /^.{8,60}$/;
    }

    const focusInput = () => {
        if (inputRef.current) inputRef.current.focus(); // label alternative
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
            <input ref={inputRef} type={type} name={label} size={1} pattern={pattern.source}
                   maxLength={maxLength} autoComplete='off' placeholder='?' onInput={resizeInput} />
        </span>
        <span className='token string'>'</span>
        </div>
    );
}

const RegisterButton = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    // <span className='z-20' tabIndex={5} onKeyPress={handleRegistration}>LrmIpsm.join(me)</span>
    // onClick={e => ((e.target as HTMLElement).parentNode! as HTMLFormElement).submit()}

    return (
        <div onClick={() => inputRef.current!.click()}
             className='py-3 border border-solid border-violet-500 font-roboto-mono text-xl text-center text-slate-100
                        bg-violet-700 hover:bg-[#7430E2] transition-colors duration-200 select-none cursor-pointer'>
            <input ref={inputRef} type='submit' onClick={e => e.stopPropagation()} 
                   className='z-20' tabIndex={5} value='LrmIpsm.join(me)' />
        </div>
    );
}

export default Register;

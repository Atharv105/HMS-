import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

import logo from './assets/logo.jpeg'

export default function LoginPage() {
    const [isSignUp, setIsSignUp] = useState(true);
    const [sapclick, setSapclick] = useState(false);
    const [user, setUser] = useState({ name: "", email: "", password: "", confPassword: "" });

    const boxRef = useRef(null);

    useEffect(() => {
        if (boxRef.current) {

            gsap.to(boxRef.current, {
                scale: 0.5,
                opacity: 0,
                duration: 0.5,
                onComplete: () => {

                    gsap.to(boxRef.current, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.5,
                        delay: 0.25 
                    });
                }
            });
        }
    }, [sapclick]);


    function handleLoginToggle() {
        setSapclick(s => !s);
        setTimeout(() => {
            setIsSignUp(!isSignUp);
        }, 500);
    }


    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            if (user.password !== user.confPassword) {
                alert("Password and Conform Password Don't Match");
            }
            else {
                console.log("Signup", user);
                setUser({ name: "", email: "", password: "", confPassword: "" });
            }
        } else {
            console.log("Login", user);
            setUser({ email: "", password: "" });
        }
    };

    return (
        <div className='  w-[100vw] h-[100vh]  flex justify-center box-border' >
            <div className="container h-[100%] flex items-center justify-center relative ">
                <div className="login w-[38vw] p-[2vw] rounded-[1vw] absolute z-1 box-shadow my-auto flex justify-center items-center flex-col gap-[1vh]">
                    <div className="logo">
                        <img className='w-[8vw]' src={logo} alt="" />
                    </div>
                    <h1 className='text-[#48e465] font-bold text-[3.5vw] font-sans'>MediConnect</h1>
                    <form onSubmit={handleSubmit} ref={boxRef} className='flex flex-col items-center gap-[3vh] opacity-0'>
                        {/* <div className='email'>
                            <input
                                type="email"
                                required
                                onChange={handleChange}
                                name='email'
                                value={user.email}
                                className='w-[30vw] text-sm text-[#F8F9F4] bg-transparent border-1 rounded-[5px] border-[#73e3e9] p-[6px]'
                                placeholder='Email'
                            />
                        </div> */}
                        
                            <div className="name">
                                <input
                                    type="text"
                                    required
                                    onChange={handleChange}
                                    name='name'
                                    value={user.name}
                                    className='w-[30vw] text-sm text-[#F8F9F4] bg-transparent border-1 rounded-[5px] border-[#73e3e9] p-[6px]'
                                    placeholder='Username'
                                />
                            </div>
                        
                        <div className="pass">
                            <input
                                type="password"
                                required
                                onChange={handleChange}
                                name='password'
                                value={user.password}
                                minLength={8}
                                maxLength={16}
                                className='w-[30vw] text-sm text-[#F8F9F4] bg-transparent border-1 rounded-[5px] border-[#73e3e9] p-[6px]'
                                placeholder='Password'
                            />
                        </div>
                        {isSignUp && (
                            <div className="confpass">
                                <input
                                    type="password"
                                    required
                                    onChange={handleChange}
                                    name='confPassword'
                                    value={user.confPassword}
                                    className='w-[30vw] text-sm text-[#F8F9F4] bg-transparent border-1 rounded-[5px] border-[#73e3e9] p-[6px]'
                                    placeholder='Confirm Password'
                                />
                            </div>
                        )}
                        <button
                            type="submit"
                            className='border-1 rounded-[30px] text-sm border-[#73e3e9] text-[#73e3e9] w-[12vw] h-[5vh] hover:bg-[#73e3e9] hover:text-black cursor-pointer'
                        >
                            {isSignUp ? 'Sign Up' : 'Login'}
                        </button>
                        <h4 className='text-sm text-[#73e3e9]'>
                            {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
                            <a onClick={handleLoginToggle} className='text-sm text-[white] cursor-pointer'>
                                {isSignUp ? 'Login' : 'Sign Up'}
                            </a>
                        </h4>
                    </form>
                </div>
            </div>
        </div>

    )
}

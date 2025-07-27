import React, { useState, useRef } from 'react';
import Lottie from 'lottie-react';
import emailSend from '../assets/Robot.json';
import { FaFacebook, FaInstagramSquare, FaGithub } from "react-icons/fa";
import { Button } from "../customs/MovingBorder/moving-border.jsx";

const Contact = ({ darkMode }) => {
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = formRef.current;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const to = "laiphuoctruong2004@gmail.com";
        const subject = encodeURIComponent(`Liên hệ từ ${name}`);
        const body = encodeURIComponent(`Họ tên: ${name}\nEmail: ${email}\n\n${message}`);
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;

        window.open(gmailURL, '_blank');
        setSubmitted(true);
        form.reset();
    };

    return (
        <section
            id='contact'
            className={`z-50 relative py-10 px-5 md:px-0 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}
        >
            <div className='mb-16 max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
                        <h2 className='text-3xl font-bold mb-3 text-cyan-500'>Get in Touch</h2>
                        <p className={`mb-4 ${darkMode ? 'text-white/85' : 'text-gray-800'}`}>
                            I am always open to new opportunities and collaboration. <br />
                            Feel free to reach out!
                        </p>
                        <div className='flex space-x-4'>
                            <a href="https://www.facebook.com/ptruong0101/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={40} className='w-12 text-blue-700 cursor-pointer transition-transform hover:scale-110' />
                            </a>
                            <a href="https://www.instagram.com/school_llaa/" target="_blank" rel="noopener noreferrer">
                                <FaInstagramSquare size={40} className='w-12 text-pink-500 cursor-pointer transition-transform hover:scale-110' />
                            </a>
                            <a href="https://github.com/truongbi01" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={40} className={`w-12 ${darkMode ? 'text-white' : 'text-black'} cursor-pointer transition-transform hover:scale-110`} />
                            </a>
                        </div>
                        <Lottie animationData={emailSend} className='w-[350px] mx-auto lg:w-[500px]' />
                    </div>

                    {submitted ? (
                        <div className={`w-full md:w-1/2 rounded-lg p-10 text-center 
                            ${darkMode
                                ? 'bg-green-900 text-green-300 border border-green-600 shadow-lg shadow-green-700'
                                : 'bg-green-100 text-green-700 border border-green-300 shadow-lg shadow-green-500'}`}>
                            <h2 className="text-2xl font-bold mb-4">🎉 Cảm ơn bạn đã kết nối với tôi!</h2>
                            <p className="text-lg mb-6">Hệ thống đã mở Gmail cho bạn, vui lòng nhấn GỬI để hoàn tất.</p>
                            <button
                                onClick={() => {
                                    setSubmitted(false);
                                    setTimeout(() => {
                                        formRef.current?.scrollIntoView({ behavior: "smooth" });
                                    }, 100);
                                }}
                                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-full transition-all"
                            >
                                🔄 Điền lại
                            </button>
                        </div>
                    ) : (
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className={`${darkMode
                                ? 'bg-gray-800 border border-cyan-600 text-white'
                                : 'bg-gray-100 border border-cyan-300 text-black'} 
                                w-full md:w-1/2 rounded-lg shadow-lg shadow-cyan-500 p-10`}
                        >
                            <h1 className={`text-4xl font-bold mb-7 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Contact Me</h1>

                            <div className='mb-4'>
                                <label htmlFor="name" className='block text-sm font-medium'>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder='Full Name'
                                    className={`mt-1 p-2 block w-full rounded-md shadow-sm 
                                        ${darkMode
                                        ? 'bg-gray-700 text-white border border-gray-600'
                                        : 'bg-white text-black border border-gray-300'}`}
                                />
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="email" className='block text-sm font-medium'>Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder='Email'
                                    className={`mt-1 p-2 block w-full rounded-md shadow-sm 
                                        ${darkMode
                                        ? 'bg-gray-700 text-white border border-gray-600'
                                        : 'bg-white text-black border border-gray-300'}`}
                                />
                            </div>

                            <div className='mb-4'>
                                <label htmlFor="message" className='block text-sm font-medium'>Message Content</label>
                                <textarea
                                    name="message"
                                    required
                                    placeholder='Enter Your Message'
                                    className={`mt-1 p-2 block w-full rounded-md shadow-sm 
                                        ${darkMode
                                        ? 'bg-gray-700 text-white border border-gray-600'
                                        : 'bg-white text-black border border-gray-300'}`}
                                />
                            </div>

                            <Button
                                borderRadius="1.75rem"
                                className="text-cyan-500 font-semibold text-lg px-6 py-2"
                                type="submit"
                            >
                                Send Message
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;

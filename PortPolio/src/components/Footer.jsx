// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FloatingDockFollow } from "../customs/FloatingFollow/FloatingDockFollow.jsx";
import Lottie from 'lottie-react';
import thankYouAnim from '../assets/ThankYou.json';

const Footer = ({ darkMode }) => {
    return (
       <footer
            className={`py-10 relative ${darkMode ? 'text-white' : 'text-black'}`}
            style={{
                background: darkMode
                    ? 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(97, 97, 97, 1) 50%, rgba(0, 0, 0, 1) 100%)'
                    : 'linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)'
            }}>
            <div className="container max-w-full px-6">
                <div className="flex flex-wrap justify-between items-start mb-8">
                    {/* Logo + About */}
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <div className="flex items-center mb-4">
                            <img
                                src={"/public/LogoTruongPublic.png"}
                                alt="Logo"
                                className="w-16 h-16 rounded-full shadow-lg"
                            />
                            <span className="text-2xl font-bold ml-3">truongphuocla.tech</span>
                        </div>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Truong Phuoc La Junior One-Member LLC (@phuoctruong0101) operates under
                            the management of LPT Tech Company
                        </p>
                    </div>

                    {/* Clause */}
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <h3 className="text-xl font-bold mb-4">Clause</h3>
                        <ul className="space-y-2">
                            {["User Agreement", "Terms of Use", "Terms - Conditions "].map((item) => (
                                <li key={item}>
                                    <a href="#"
                                        className={`flex items-center transition duration-300 
                                        ${darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-500'}`}>
                                        <IoIosArrowForward size={20} />
                                        <span className="ml-2">{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hotline */}
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <h3 className="text-xl font-bold mb-4">Hotline</h3>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email: laiphuoctruong2004@gmail.com</p>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone number: +84 123 456 789</p>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Address: District 10, Ho Chi Minh</p>
                    </div>

                    {/* Introduction */}
                    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                        <h3 className="text-xl font-bold mb-4">Introduction</h3>
                        <ul className="space-y-2">
                            {["About me", "News", "Contact"].map((item) => (
                                <li key={item}>
                                    <a href="#"
                                        className={`flex items-center transition duration-300 
                                        ${darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-500'}`}>
                                        <IoIosArrowForward size={20} />
                                        <span className="ml-2">{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Follow me */}
                <div className="mt-2 md:mt-4 text-center">
                    <h3 className="text-xl font-bold mb-2">Follow Me</h3>
                    <div className="flex md:mt-4 mt-2 justify-center">
                        <FloatingDockFollow />
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-6">
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Copyright © 2024-2035 truongphuocla.id.vn. A premier online user protection platform in Vietnam.
                    </p>
                    <div className="mt-2 flex justify-center items-center gap-2">
                        <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Thank you for visiting my portfolio
                        </span>
                        <Lottie animationData={thankYouAnim} loop={true} className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

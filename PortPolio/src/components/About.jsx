import { useState, useEffect } from 'react';
import Html from '../assets/Html.png';
import Css from '../assets/CSS.png';
import Javascript from '../assets/JS.png';
import ReactLogo from '../assets/React.png';
import CshapeLogo from '../assets/C-shape.png';
import Tailwind from '../assets/Tailwind Css.png';
import Bootstrap from '../assets/Bootstrap.png';
import JavaLogo from '../assets/JavaLogo.png';
import Mongodb from '../assets/mongodb.svg';
import SqlLogo from '../assets/SqlLogo.png';
import Flutter from '../assets/FlutterLogo.png';
import DartLogo from '../assets/DartLogo.png';
import FigmaLogo from '../assets/Figma.png';
import AndroidLogo from '../assets/android.png';
import LogoHuflit from '../assets/Logo-Huflit.png';
import TruongPixel from '../../public/TruongPixel.png';
import LogoNDC from '../assets/NguyenDinhChieu.png';
import TruongAction from '../assets/TruongAction.gif';
import { FaGraduationCap } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';
import LinkPreview from "../Tests/LinkPreview/link-preview.jsx";
import { BackgroundBeamsWithCollision } from "../Tests/BackgroundBeamsWithCollision/BackgroundBeamsWithCollision.jsx";

import Lottie from 'lottie-react';
import ProfileAvatar from '../assets/ProfileAvatar.json';

const About = ({ darkMode }) => {

    const controls = useAnimation();

    const handleScroll = () => {
        const scrollY = window.scrollY;
        controls.start({
            opacity: scrollY > 100 ? 1 : 0,
            y: scrollY > 100 ? 0 : 50,
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [currentSrc, setCurrentSrc] = useState(TruongAction);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSrc((prevSrc) => (prevSrc === TruongAction ? TruongPixel : TruongAction));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`relative transition-colors duration-500 ${darkMode ? 'bg-[#0e0f1c]' : 'text-black'}`}
                style={{
                    background: darkMode
                    ? '#0e0f1c'
                    : 'linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)'
                }}
            id='about'
        >
            <BackgroundBeamsWithCollision>
                <div className={`py-6 md:py-10 ${darkMode ? 'text-white' : 'text-black'}`}>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.4, delay: 0 }}
                        >
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#2A7B9B] via-[#30B8C2] to-[#536DED] bg-clip-text text-transparent border-b border-cyan-500 w-max pb-2 flex items-center">
                                Overview
                                <Lottie animationData={ProfileAvatar} loop={true} className="h-20 w-20 ml-1" />
                            </h2>

                            <div className='mt-8'>
                                <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                                    <div className="flex flex-col items-center justify-center gap-8 ">
                                        <div
                                            className={"flex flex-col-1 sm:flex-col-2 md:gap-6 gap-4 items-center justify-center"}>
                                            <div
                                              className="bg-gradient-to-r from-[#24A3E3] via-[#ABE0E0] to-[#83DDE7] hover:scale-105 p-1 rounded-full  w-42 lg:w-54  "
                                            >
                                              <img  
                                                src={currentSrc}
                                                alt="Tuan Profile"
                                                className="rounded-full w-40 lg:w-52 shadow-xl transition-transform duration-300  bg-white"
                                              />
                                            </div>
                                            <div className="text-center md:text-left">  
                                                <p className={`text-2xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Lai Phuoc Truong</p>

                                                <p className="mt-3 text-lg text-gray-600">
                                                    A Full-Stack Developer with expertise in web development, Odoo, Android and IOS Development,..
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#2A7B9B] via-[#30B8C2] to-[#536DED] bg-clip-text text-transparent border-b border-cyan-500">
                                                Expedition
                                                
                                            </h3>
                                            <p className='mt-2 text-lg text-gray-600'>
                                                My programming journey began in high school, 
                                                where I was fortunate to learn from an exceptional teacher at a specialized school. 
                                                This foundation led me to delve into C#, MVC, React, Kotlin, and Dart at university.
                                                 I have since developed diverse projects including a book-selling app, 
                                                 a cosmetics store management web application, a booking app, and a delivery app. 
                                                 In all these endeavors, my focus has consistently been on crafting user-friendly, 
                                                 intuitive interfaces and optimizing performance to ensure engaging digital experiences.
                                                </p>
                                            </div>
                                    </div>
                                    <div
                                        className='border border-cyan-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center justify-center max-h-max shadow-lg shadow-cyan-300'>
                                        <h3
                                          className="text-2xl font-semibold bg-gradient-to-r from-[#2A7B9B] via-[#30B8C2] to-[#536DED] bg-clip-text text-transparent"
                                        >
                                          Skills & Expertise
                                          
                                        </h3>
                                        <div className='flex items-center justify-center flex-wrap gap-3'>
                                            <div
                                                className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                                <img src={Html} alt="" className='w-10'/>
                                                <span className='font-semibold'>HTML</span>
                                            </div>
                                            <div
                                                className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                                <img src={Css} alt="" className='w-8'/>
                                                <span className='font-semibold'>CSS</span>
                                            </div>
                                            <div
                                                className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                                <img src={Javascript} alt="" className='w-10'/>
                                                <span className='font-semibold'>Javascript</span>
                                            </div>
                                            <div
                                                className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                                <img src={ReactLogo} alt="" className='w-8 rounded-full'/>
                                                <span className='font-semibold'>React</span>
                                            </div>
                                            <div
                                                className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                                <img src={CshapeLogo} alt="" className='w-8'/>
                                                <span className='font-semibold'>C #</span>
                                            </div>
                                            <div
                                                className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                                <img src={Tailwind} alt="" className='w-8 rounded-full'/>
                                                <span className='font-semibold'>Tailwind Css</span>
                                            </div>
                                            <div
                                                className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                                <img src={Bootstrap} alt="" className='w-10'/>
                                                <span className='font-semibold'>Bootstrap</span>
                                            </div>
                                            <div
                                                className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                                <img src={JavaLogo} alt="" className='w-10'/>
                                                <span className='font-semibold'>Java</span>
                                            </div>
                                            <div
                                                className='border border-cyan-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md sshadow-red-300'>
                                                <img src={Mongodb} alt="" className='w-10'/>
                                                <span className='font-semibold'>Mongodb</span>
                                            </div>
                                            <div
                                                className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                                <img src={SqlLogo} alt="" className='w-10'/>
                                                <span className='font-semibold'>SQL</span>
                                            </div>
                                            <div
                                                className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                                <img src={Flutter} alt="" className='w-11'/>
                                                <span className='font-semibold'>Flutter</span>
                                            </div>
                                            <div
                                                className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                                <img src={DartLogo} alt="" className='w-11'/>
                                                <span className='font-semibold'>Dart</span>
                                            </div>
                                            <div
                                                className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                                <img src={FigmaLogo} alt="" className='w-9'/>
                                                <span className='font-semibold'>Figma</span>
                                            </div>
                                            <div
                                                className='border border-cyan-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-cyan-300'>
                                                <img src={AndroidLogo} alt="" className='w-9'/>
                                                <span className='font-semibold'>Android</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className='mt-12'>
                          <h3 className={`text-2xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                More About Me
                            </h3>
                            {/* Education Section */}
                            <motion.div
                                initial={{opacity: 0, scale: 0.5}}
                                whileInView={{opacity: 1, scale: 1}}
                                transition={{duration: 1.4, delay: 0}}
                            >
                               <h2 className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} border-b-2 border-blue-300 pb-3 flex items-center gap-3`}>
                                    <FaGraduationCap className="text-blue-500" /> Education and Certifications
                                </h2>
                                <div className="flex flex-col md:flex-row gap-8 mt-6">
                                {/* Trường 1 */}
                                <div className="flex items-start gap-8">
                                    <LinkPreview url={"https://huflit.edu.vn/"}>
                                    <img
                                        src={LogoHuflit}
                                        alt="University Logo"
                                        className="w-28 object-cover"
                                    />
                                    </LinkPreview>
                                    <div className={"flex flex-col"}>
                                    <div>
                                    <LinkPreview
                                        url={"https://huflit.edu.vn/"}
                                        className={`text-xl md:text-2xl font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}
                                    >
                                        Trường Đại học Ngoại Ngữ và Tin Học TP.HCM
                                    </LinkPreview>
                                    </div>
                                    <p className="text-sm md:text-lg text-gray-600">Công nghệ thông tin (2022 - 2025)</p>
                                    <p className="text-sm md:text-lg text-gray-600">Chuyên ngành: Công nghệ phần mềm</p>
                                    <p className={`text-sm md:text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>GPA: 3.2/4</p>
                                    </div>
                                </div>
                                {/* Trường 2 */}
                                <div className="flex items-start gap-8">
                                    <LinkPreview url={"https://http://thpt-chuyennguyendinhchieu.dongthap.edu.vn/?fbclid=IwY2xjawLvYY9leHRuA2FlbQIxMABicmlkETFlUnRON0EySUNVR1dCd0N5AR7WAIcrrTa7uZaqXHGZvIZXH6FkVw9Xx1nEA3z2Q_Ehcng-JsOvdE0PfHfwng_aem_0wl_3XASsenpj5qJhgj5AQ.edu.vn/"}>
                                    <img
                                        src={LogoNDC}
                                        alt="University Logo"
                                        className="w-28 object-cover"
                                    />
                                    </LinkPreview>
                                    <div className={"flex flex-col"}>
                                    <div>
                                        <LinkPreview url={"https://vi.wikipedia.org/wiki/Tr%C6%B0%E1%BB%9Dng_Trung_h%E1%BB%8Dc_ph%E1%BB%95_th%C3%B4ng_chuy%C3%AAn_Nguy%E1%BB%85n_%C4%90%C3%ACnh_Chi%E1%BB%83u"}
                                        className={"text-xl md:text-2xl font-semibold text-gray-800 mb-1"}>
                                        Trường THPT chuyên Nguyễn Đình Chiểu
                                        </LinkPreview>
                                    </div>
                                    <p className="text-sm md:text-lg text-gray-600">Trường THPT chuyên Nguyễn Đình Chiểu (2019 - 2022)</p>
                                    <p className="text-sm md:text-lg text-gray-600">Chuyên Tin</p>
                                    <p className={`text-sm md:text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>GPA: 8.8/10</p>
                                    </div>
                                </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    )
}

export default About
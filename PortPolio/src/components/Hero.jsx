import { motion } from 'framer-motion';
import reactLogo from '../assets/React.png';
import githubLogo from '../assets/Github.png';
import tailwindLogo from '../assets/Tailwind Css.png';
import Truong from '../../public/TruongCool.png';
import SliderLogo from "../customs/SliderLogo.jsx";
import CircularLogoSlider from "../customs/CircularLogoSlider.jsx";
import { MdOutlineFileDownload } from "react-icons/md";

const Hero = ({ darkMode }) => {

    const textVariants = {
        hidden: { opacity: 0, y: 20 },  
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.4 }
        })
    };


    return (
        <section className='relative'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
                    {/* Left Content */}
                    <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col px-6 lg:px-0'>
                        <motion.div className="space-y-1 md:space-y-4">
                            <h1 className={`text-2xl lg:text-7xl font-bold leading-snug ${darkMode ? "text-white" : "text-black"}`}>
                                Hi Everyone, <br/>
                            </h1>
                            <h1 className='text-3xl lg:text-7xl font-bold text-cyan-500 leading-snug'>
                                {"I'm Truong Phuoc La".split('').map((char, i) => (
                                    <motion.span key={i} variants={textVariants} initial='hidden' animate='visible'
                                                 custom={i}>
                                        {char}
                                    </motion.span>
                                ))}    
                            </h1>
                           <h2 className="text-xl lg:text-4xl font-semibold mt-6 mb-2 bg-gradient-to-r from-[#24A3E3] via-[#ABE0E0] to-[#83DDE7] bg-clip-text text-transparent">
                                Software Engineer and Designer
                            </h2>
                            <motion.p className={`${darkMode ? "text-white" : "text-black"}`} initial={{opacity: 0}} animate={{opacity: 1}}
                                      transition={{delay: 1}}>
                                Passionate technophile specializing in Android and IOS, crafting engaging digital experiences
                            </motion.p>
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 1.8}}
                                className="mt-4 w-96 overflow-hidden py-4">
                                <div>
                                    <SliderLogo/>
                                </div>
                            </motion.div>
                            <motion.a
                                href="https://drive.google.com/file/d/1W7qxq70dsjR6olSmXPk4zVWCq-t-awcW/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                                    darkMode ? "bg-cyan-400 text-white hover:bg-cyan-500" : "bg-white text-black hover:bg-gray-300"
                                }`}
                                initial={{scale: 0}}
                                animate={{scale: 1}}
                                transition={{duration: 0.5, delay: 1.5}}
                            >
                                <MdOutlineFileDownload className="w-5 h-5"/>
                                <span>Download CV</span>
                            </motion.a>

                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <div className='md:w-1/2 flex justify-center relative'>
                        <motion.img
                            src={Truong}
                            alt='Truong'
                            className='w-full h-auto max-h-[90vh] object-contain transition-opacity duration-1000 ease-in-out'
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1.5}}
                        />
                        <img
                            src={reactLogo}
                            alt='React'
                            className='absolute w-10 top-36 left-0 rounded-full md:hidden'
                        />
                        <img
                            src={githubLogo}
                            alt='GitHub'
                            className='absolute w-10 top-0 right-5 md:hidden'
                        />
                        <img
                            src={tailwindLogo}
                            alt='Tailwind'
                            className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'
                        />
                    </div>

                </div>

                {/* Social Links */}
                <motion.div
                    className='absolute top-40 right-1 hidden xl:flex'
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1.5, delay: 3}}
                >
                    <CircularLogoSlider/>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
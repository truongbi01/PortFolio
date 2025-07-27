import { useState } from 'react';
import Lottie from 'lottie-react';
import emailSend from '../assets/Coding.json';

import Portfolio from '../assets/Profile01.jpg';
import Project02 from '../assets/Lalamove.jpg';
import Project03 from '../assets/Bansach.jpg';
import Project04 from '../assets/TrungTamThuongMai.jpg';
import Project05 from '../assets/QuanLiSieuThi.jpg';
import Project06 from '../assets/BookingAdvance.png';

import Cards from './Cards';

const Projects = ({ darkMode }) => {
    const [showAll, setShowAll] = useState(false);

    const projectJson = [
        {
            title: 'Profile',
            desc: 'A personal website showcasing my profile and completed projects',
            image: Portfolio,
            live: "https://phuoctruong.id.vn/",
            github: ""
        },
        {
            title: 'Hệ thống giao hàng Lalamove',
            desc: 'An on-demand delivery app connecting users with reliable local delivery services for various needs.',
            image: Project02,
            live: "https://www.lalamove.com/vi-vn/",
            github: "https://github.com/PhanMaiQuocKiet/Lalamove"
        },
        {
            title: 'App Quản lý nhà sách',
            desc: 'A comprehensive bookshop management application designed to streamline inventory, sales, and customer operations',
            image: Project03,
            live: "",
            github: "https://github.com/truongbi01/BanSach1"
        },
        {
            title: 'Quản lý trung tâm thương mại',
            desc: 'A robust mall management application designed to optimize operations, enhance tenant services, and improve the overall visitor experience',
            image: Project04,
            live: "",
            github: "https://github.com/truongbi01/DoAnThuongMai"
        },
        {
            title: 'Beauty Store Management',
            desc: 'An intuitive application designed to streamline inventory, sales, and customer relationship management for beauty and cosmetic stores',
            image: Project05,
            live: "https://github.com/truongbi01/Supermarket-Managing",
            github: "https://github.com/truongbi01/Supermarket-Managing"
        },
        {
            title: 'Advanced Booking App',
            desc: 'My first project, a website that replicates the functionality of ShopDunk, a well-known electronics retailer.',
            image: Project06,
            live: "",
            github: "https://github.com/pKietDE/Android_Advance_Booking_App"
        },
    ];

    const displayedProjects = showAll ? projectJson : projectJson.slice(0, 6);

    return (
        <section
            id='projects'
            className={`relative py-6 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
        >
            <div className='mb-10 max-w-7xl mx-auto'>
                <h2 className={`text-3xl font-bold mb-8 w-max pb-4 flex items-center border-b border-cyan-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    My Project
                    <Lottie animationData={emailSend} loop={true} className="h-20 md:h-28 w-auto ml-2" />
                </h2>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-10'>
                    {displayedProjects.map((items, index) => (
                        <Cards key={index} item={items} darkMode={darkMode} />
                    ))}
                </div>

                {projectJson.length > 6 && (
                    <div
                        className={`mt-6 px-4 py-2 cursor-pointer font-semibold text-lg text-center border-2 rounded-full transition-colors duration-300 
                        ${darkMode
                            ? 'text-cyan-400 border-cyan-400 hover:bg-cyan-400 hover:text-black'
                            : 'text-cyan-600 border-cyan-600 hover:bg-cyan-400 hover:text-white'
                        }`}
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? 'Ẩn bớt' : 'Xem tất cả'}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;

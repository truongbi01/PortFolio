import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticleBackground from './components/Particle';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SliderRunNavBar from './customs/SliderRunNavBar.jsx';

import {MoreAboutMe} from "./components/MoreAboutMe.jsx";
const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    //call-Back.
    const toggleDarkMode = () => setDarkMode(!darkMode);
    return (
        <Router>
            <>
                <ParticleBackground darkMode={darkMode}/>
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <SliderRunNavBar />
                <Hero darkMode={darkMode}/>
                <About darkMode={darkMode}/>
                <Projects darkMode={darkMode}/>
                <MoreAboutMe />
                <Contact darkMode={darkMode}/>
                <Footer darkMode={darkMode} />
                
            </>
        </Router>
    );
};

export default App;
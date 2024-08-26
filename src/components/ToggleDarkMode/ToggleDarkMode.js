import React, { useState, useEffect } from "react";
import moonLogo from '../images/icon-moon.svg';
import sunLogo from '../images/icon-sun.svg';

const ToggleDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        }
    }, []);

    const toggleDark = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }

        setDarkMode(!darkMode);
    };

    return (
        <button onClick={toggleDark} className="">
            <img src={darkMode ?  sunLogo : moonLogo } alt="Toggle dark mode" />
        </button>
    );
};

export default ToggleDarkMode;

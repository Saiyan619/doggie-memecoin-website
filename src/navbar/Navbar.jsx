import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="navbar_container">
            <nav>
                <div>
                    <img className="hero_logo" src="./logo (2).png" alt="Logo" />
                </div>

                <div className="hamburger">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>

                <div
                    className={isOpen ? 'list_and_btn_container_active' : 'list_and_btn_container'}
                >
                    <ul>
                        <li onClick={() => handleScroll('section1')}>STORY</li>
                        <li onClick={() => handleScroll('section3')}>FEATURED DOGS</li>
                        <li onClick={() => handleScroll('section4')}>ROADMAP</li>
                        <li onClick={() => handleScroll('section5')}>DISCORD</li>
                        <li onClick={() => handleScroll('section6')}>CREW</li>
                        <li onClick={() => handleScroll('section7')}>FAQ</li>
                    </ul>

                    <div>
                        <button className="connect_btn">Connect Wallet</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

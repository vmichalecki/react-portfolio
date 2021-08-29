import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
    let navList = 'nav-ul';
    let navItem = 'nav-li';
    let navLink = 'nav-link';
    return (
        <div>
            <ul className={navList}>
                <li className={navItem}>
                    <a
                        href="#about-me"
                        onClick={() => handlePageChange('About')}
                        className={navLink}
                    >
                        about me
                    </a>
                </li>
                <li className={navItem}>
                    <a
                        href="#my-work"
                        onClick={() => handlePageChange('Projects')}
                        className={navLink}
                    >
                        my work
                    </a>
                </li>
                <li className={navItem}>
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={navLink}
                    >
                        contact me
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;
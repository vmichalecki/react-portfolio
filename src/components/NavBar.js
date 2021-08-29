import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
    const styles = {
        bar: {
            display: 'flex',
            justifyContent: 'space-between',
            background: '#fbc02d',
        },
    }

    let headerClasses = 'header plain';
    let navList = 'nav-ul';
    let navItem = 'nav-li plain';
    let navLink = 'nav-link';

    return (
        <div style={styles.bar}>

            <div className={headerClasses}>
                <h1>
                    <a
                        href="https://github.com/vmichalecki" target="_blank"
                        rel="noopener noreferrer">
                        Valerie Michalecki
                    </a>
                </h1>
            </div >


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
    );
}

export default NavBar;
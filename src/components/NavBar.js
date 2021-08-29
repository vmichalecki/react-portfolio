import React from 'react';

export const NavBar = () => {
    let navList = 'nav-ul';
    let navItem = 'nav-li';
    let navLink = 'nav-link';
    return (
        <div>
            <ul className={navList}>
                <li className={navItem}>
                    <a className={navLink} href="#about-me">about me</a>
                </li>
                <li className={navItem}>
                    <a class={navLink} href="#work">my work</a>
                </li>
                <li className={navItem}>
                    <a className={navLink} href="#contact">contact me</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;
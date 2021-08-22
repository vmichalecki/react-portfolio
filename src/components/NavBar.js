import React from 'react';

export const MyNavBar = () => {
    return (
        <div>
            <ul className="nav-ul">
                <li className="nav-li">
                    <a className="nav-link" href="#about-me">about me</a>
                </li>
                <li className="nav-li">
                    <a class="nav-link" href="#work">my work</a>
                </li>
                <li className="nav-li">
                    <a className="nav-link" href="#contact">contact me</a>
                </li>
            </ul>
        </div>
    )
}
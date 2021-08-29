import React from 'react';

function Header() {
    let headerClasses = 'header plain';
    return (
        <div className={headerClasses}>
            <h1>
                <a
                    href="https:/le/github.com/vmichalecki" target="_blank"
                    rel="noopener noreferrer">
                    Valerie Michalecki
                </a>
            </h1>
        </div >
    );
}

export default Header;

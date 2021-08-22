import React from 'react';

function Header() {
    let headerClasses = 'header plain';
    return (
        <div className={headerClasses}>
            <h1>
                <a
                    href="https://github.com/vmichalecki" target="_blank"
                    rel="noopener noreferrer">
                    valerie michalecki
                </a>
            </h1>
        </div >
    );
}

export default Header;

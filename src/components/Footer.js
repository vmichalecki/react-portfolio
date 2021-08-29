import React from 'react';

function Footer() {
    let footerClass = 'footer-p';
    let bold = 'bold';
    return (
        <div className={footerClass}>
            MADE WITH LOVE, SWEAT, AND I'M BABY BABY BY <span className={bold}>VALERIE</span>
        </div >
    );
}

export default Footer;
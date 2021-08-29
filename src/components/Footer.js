import React from 'react';

function Footer() {
    let footerClass = 'footer-p';
    let bold = 'bold';
    return (
        <div className={footerClass}>
            MADE WITH LOVE BY <span className={bold}>VALERIE</span>
        </div >
    );
}

export default Footer;
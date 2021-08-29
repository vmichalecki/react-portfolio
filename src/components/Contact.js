import React from 'react';

function Contact() {
    let contactClass = 'contact-container';
    let ulClass = 'contact-ul';
    return (
        <div className={contactClass}>
            <h2 id="contact" class>Contact Me</h2>
            <ul className={ulClass}>
                <li>
                    <a class="contact-li" href="mailto:valeriemichalecki@gmail.com">
                        valeriemichalecki@gmail.com
                    </a>
                </li>
                <li>
                    <a class="contact-li" href="tel:7737977972">
                        773-797-7972
                    </a>
                </li>
                <li>
                    <a class="contact-li" href="https://www.linkedin.com/in/vmichalecki">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a class="contact-li" href="https://github.com/vmichalecki">
                        GitHub
                    </a>
                </li>
            </ul>
            <a class="resume" href="https://drive.google.com/file/d/1lA6H5zgeCqtPWZ-wWplDNO0MGXijGdTX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                My Resume
            </a>
        </div>
    );
}

export default Contact;
import React from 'react';
import HeroImage from '../../images/hero.png';

function About() {
    let container = 'about-container';
    let hero = 'hero';
    let aboutClass = 'about-container about';
    return (
        <div className={container} >

            <img className={hero} src={HeroImage} alt={'Valerie Michalecki applying lipstick on Mount Everest'} />

            <div className={aboutClass}>
                <p>
                    I'm a self-starting full stack developer from New York City with ambition and an accent who builds polished, functional products from front to back.

                    I enjoy the outdoors as much as I enjoy designer makeup so when I'm not programming, you can find me outside. I'll be the one with lipstick and hiking boots on.
                </p>
            </div>
        </div>
    );
}

export default About;
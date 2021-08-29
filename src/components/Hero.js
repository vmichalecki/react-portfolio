import React from 'react';
import HeroImage from '../images/hero.png';

function Hero() {
    let hero = 'hero';
    return (
        <div>
            <img className={hero} src={HeroImage} alt={'Valerie Michalecki applying lipstick on Mount Everest'} />
        </div>

    )
}

export default Hero;
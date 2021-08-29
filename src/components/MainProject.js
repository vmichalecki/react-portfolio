import React from 'react';
import Beatwave from '../images/beatwave-screen.png';

function MainProject() {
    let mainProject = 'container-first';
    let mainImage = 'first-project';
    return (
        <div className={mainProject}>
            <a href="https://group-proj-1.github.io/beatwave/">
                <img
                    className={mainImage}
                    src={Beatwave}
                    alt={'Beatwave'}
                />
            </a>
            <div className="overlay">BEATWAVE</div>
        </div>
    )
}

export default MainProject;


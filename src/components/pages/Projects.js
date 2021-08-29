import React from 'react';
import Beatwave from '../../images/beatwave-screen.png';
import Quiz from '../../images/quiz-screen.png';
import Weather from '../../images/weather-dashboard-screen.png';

function Projects() {
    let mainProject = 'container-first';
    let mainImage = 'first-project';
    return (
        <div>

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

            <div>

                <div className="container">
                    <a href="https://vmichalecki.github.io/timed-quiz/">
                        <img
                            className="projects"
                            src={Quiz}
                            alt={'the existential dread quiz'}
                        /></a>
                    <div className="overlay">The Existential Dread Quiz</div>
                </div>

                <div className="container">
                    <a href="https://vmichalecki.github.io/weather-dashboard/">
                        <img
                            className="projects"
                            src={Weather}
                            alt="weather dashboard"
                        />
                    </a>
                    <div className="overlay">Weather Dashboard</div>
                </div>

                <div className="line-break"></div>

                <div className="repo-container">
                    <h2>Repositories</h2>
                    <ul className="repo-ul">
                        <li>
                            <a className="repo-li" href="https://github.com/group-proj-1/beatwave"
                            >BEATWAVE</a
                            >
                        </li>
                        <li>
                            <a className="repo-li" href="https://github.com/vmichalecki/timed-quiz"
                            >The Existential Dread Quiz</a
                            >
                        </li>
                        <li>
                            <a
                                className="repo-li"
                                href="https://github.com/vmichalecki/weather-dashboard"
                            >Weather Dashboard</a
                            >
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Projects;


import React from 'react';
import Beatwave from '../../images/beatwave-screen.png';
import Quiz from '../../images/quiz-screen.png';
import Weather from '../../images/weather-dashboard-screen.png';

function Projects() {
    let container = 'projects'
    let project = 'container-first';
    let image = 'first-project';

    return (
        <div>
            <div className={container}>
                <div className={project}>
                    <a href="https://group-proj-1.github.io/beatwave/">
                        <img
                            className={image}
                            src={Beatwave}
                            alt={'Beatwave'}
                        />
                    </a>
                    <div className="overlay">BEATWAVE</div>
                </div>

                <div className={project}>
                    <a href="https://vmichalecki.github.io/timed-quiz/">
                        <img
                            className={image}
                            src={Quiz}
                            alt={'the existential dread quiz'}
                        /></a>
                    <div className="overlay">The Existential Dread Quiz</div>
                </div>

                <div className={project}>
                    <a href="https://vmichalecki.github.io/weather-dashboard/">
                        <img
                            className={image}
                            src={Weather}
                            alt="weather dashboard"
                        />
                    </a>
                    <div className="overlay">Weather Dashboard</div>
                </div>
            </div>

            <div className="line-break"></div>

            <div className="repo-container">
                <h2>Repositories</h2>
                <p className="repo-ul">

                    <a className="repo-li" href="https://github.com/group-proj-1/beatwave"
                    >BEATWAVE</a
                    >


                    <a className="repo-li" href="https://github.com/vmichalecki/timed-quiz"
                    >The Existential Dread Quiz</a
                    >


                    <a
                        className="repo-li"
                        href="https://github.com/vmichalecki/weather-dashboard"
                    >Weather Dashboard</a
                    >

                </p>
            </div>

        </div>

    )
}

export default Projects;


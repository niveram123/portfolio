import React from 'react';

function Education() {
    return (
        <>
            <section id="education">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="edu">
                                <h2>Education</h2>

                                <span class="glyphicon glyphicon-education"></span>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <h3>Anna University-(2017-2021)</h3>
                            <h4>Bachelor of Engineering|Electronics&Communication Engineering</h4>
                            <h4>CGPA:7.54</h4>
                            <hr />
                            <h3>Government Higher Secondary School-2017</h3>
                            <h4>HSC-Higher Secondary Certificate</h4>
                            <h4>Percentage:89.16%</h4>
                            <hr />
                            <h3>Government Higher Secondary School-2015</h3>
                            <h4>SSLC-Secondary Certificate</h4>
                            <h4>Percentage:93.8%</h4>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-4">
                            <div class="edu">
                                <h2>Work Experience</h2>
                                <span class="glyphicon glyphicon-briefcase"></span>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h3>Digital Marketing Intern</h3>
                            <h4>Little Cuckoo Digital Marketing|Dec 2020-Jan 2021</h4>

                        </div>
                        <hr />
                    </div>
                </div>

                <section id="skill">
                    <div id="container">
                        <div class="row">
                            <div className="col-md-4">
                                <div class="edu">
                                    <h2 >Skills & Technology</h2>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h4>Html</h4>
                                <div className="progress">
                                    <div className="progress-bar  progress-bar-striped " style={{ width: "90%" }}>
                                        90%
                                    </div>
                                </div>
                                <h4>CSS</h4>
                                < div className="progress">
                                    <div className="progress-bar progress-bar-secondary  progress-bar-striped " style={{ width: "90%" }}>
                                        90%
                                    </div>
                                </div>
                                <h4>Bootstrap</h4>
                                < div className="progress">
                                    <div className="progress-bar progress-bar-warning progress-bar-striped " style={{ width: "50%" }}>
                                        50%
                                    </div>
                                </div>
                                <h4>Javascript</h4>
                                < div className="progress">
                                    <div className="progress-bar progress-bar-warning progress-bar-striped " style={{ width: "50%" }}>
                                        50%
                                    </div>
                                </div>
                                <h4>React js</h4>
                                < div className="progress">
                                    <div className="progress-bar progress-bar-warning progress-bar-striped " style={{ width: "35%" }}>
                                        35%
                                    </div>
                                </div>
                                <h4>LT spice</h4>
                                < div className="progress">
                                    <div className="progress-bar progress-bar-warning progress-bar-striped " style={{ width: "85%" }}>
                                        85%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </section>

        </>

    )
}

export default Education;
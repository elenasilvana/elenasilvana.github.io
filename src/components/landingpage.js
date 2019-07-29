import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://i.postimg.cc/Y98PQvcg/Whats-App-Image-2019-07-28-at-19-46-16.jpg"
                            alt="avatar"
                            className="avatar-img">
                        </img>
                        <div className="banner-text">
                            <h2>Front End Developer</h2>
                            <hr />
                            <p> HTML/CSS | Bootstrap | Javascript | React | NodeJS | Express | MongoDB</p>
                            <div className="social-links">
                                <a
                                    target="_blank"
                                    href="https://github.com/elenasilvana">
                                    <i className="fa fa-github" aria-hidden='true' />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/elena-silvana-c/">
                                    <i className="fa fa-linkedin" aria-hidden='true' />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;


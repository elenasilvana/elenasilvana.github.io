import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img
                    src="https://avatarfiles.alphacoders.com/125/125495.jpg"
                    alt="avatar"
                    className="avatar-img">       
                    </img>
                    <div className="banner-text">
                        <h2>Front End Developer</h2>
                        <hr/>
                        <p> HTML/CSS | Bootstrap | Javascript | React | NodeJS | Express | MongoDB</p>
                        <div className="social-links">
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github" aria-hidden="true"/>
                            </a>
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
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


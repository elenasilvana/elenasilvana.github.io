import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <div className="contact-text">
                            <h2>Looking for me?</h2>
                        </div>
                            
                    
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '1.8em', fontFamily: 'Merriweather Sans', color: '#9da1aa' }}>
                                        <a
                                        href="mailto:ele.silvana.c@gmail.com">
                                            <i className="fa fa-envelope" aria-hidden='true' />
                                            ele.silvana.c@gmail.com
                                        </a>
                                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '1.8em', fontFamily: 'Merriweather Sans', color: '#9da1aa' }}>
                                        <a
                                            target="_blank"
                                            href="https://github.com/elenasilvana">
                                                <i className="fa fa-github" aria-hidden='true' />
                                                elenasilvana
                                        </a>
                                    </ListItemContent>
                                </ListItem><ListItem>
                                    <ListItemContent style={{ fontSize: '1.8em', fontFamily: 'Merriweather Sans', color: '#9da1aa' }}>
                                        <a
                                            target="_blank"
                                            href="https://www.linkedin.com/in/elena-silvana-c/">
                                                <i className="fa fa-linkedin" aria-hidden='true' />
                                                elena-silvana-c
                                        </a>

                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Contact;

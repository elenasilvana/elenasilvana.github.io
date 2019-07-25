import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Elena Silvana</h2>
                        <img
                            src="https://avatarfiles.alphacoders.com/125/125495.jpg"
                            alt="avatar"
                            style={{ height: '250px' }}></img>
                        <p style={{ margin: 'auto,', paddingTop: '1em' }}>
                            Front end developer formada en Laboratoria, egresada de la licenciatura en artes visuales de la secretaría de cultura Jalisco
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Merriweather Sans'}}>
                                        <i className="fa fa-phone-square" aria-hidden='true'/>
                                        (33) 36 26 45 79
                                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Merriweather Sans'}}>
                                        <i className="fa fa-envelope" aria-hidden='true'/>
                                        ele.silvana.c@gmail.com
                                        </ListItemContent>
                                </ListItem><ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Merriweather Sans'}}>
                                        <i className="fa fa-phone-square" aria-hidden='true'/>
                                        linkedin
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

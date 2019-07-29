import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class ShowCard extends Component {
    render(){
        return(
            <Card shadow={5} style={{ minWidth: '300px', margin: 'auto' }}>
                        <CardTitle
                            style={{
                                color: '#9c0c59',
                                height: '300px',
                                background: `url(${this.props.img}) center / cover`,
                                alignItems: 'center'
                            }}
                        >
                           {this.props.name}
                    </CardTitle>
                        <CardText>
                            {this.props.description}
                            <h5>Technologies:</h5>
                            {this.props.tech}

                    </CardText>
                        <CardActions border>
                            <a
                            target="_blank"
                            href={this.props.repository}>
                            <Button colored>Github</Button>
                            </a>
                            <a
                            target="_blank"
                            href={this.props.url}>
                            <Button colored>LiveDemo</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
        )
    }
} 

export default ShowCard;
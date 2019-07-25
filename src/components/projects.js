import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories = () => {
        if (this.state.activeTab === 0) {
            /*Pokemon project Javascript */
            return (
                <div  className="projects-grid">      
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle
                        style={{
                            color: '#fff',
                            height: '176px',
                            background: 'url(https://i.postimg.cc/LXxCwrvQ/pokeball.png) center / cover'
                        }}
                    >
                        Javascript Project
                    </CardTitle>
                    <CardText>
                        Conoce Pokemón es una WebApplication para conocer pokemón
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>LiveDemo</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            /* React Project */
            return (
                <div  className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle
                            style={{
                                color: '#fff',
                                height: '176px',
                                background: 'url(https://i.postimg.cc/LXxCwrvQ/pokeball.png) center / cover'
                            }}
                        >
                            React JS
                    </CardTitle>
                        <CardText>
                            Burger queen
                    </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            /* Node JS project */
            return (
                <div  className="projects-grid">             
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                    <CardTitle
                        style={{
                            color: 'black',
                            height: '176px',
                            background: 'url(https://i.postimg.cc/LXxCwrvQ/pokeball.png) center / cover'
                        }}
                    >
                        Node JS
                </CardTitle>
                    <CardText>
                        API REST BQ
                </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>LiveDemo</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }

    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Javascript</Tab>
                    <Tab>React</Tab>
                    <Tab>NodeJS</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}

                            </div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;

import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

    class ProjectComponent extends Component {
        render(){
            
                return (
                    <Container fluid={false} className="meetpokemon-container">
                <Row noGutters={true}>
                    <Col>
                        <div className={`${this.props.id}-page portada`}>
                            <h1>{this.props.name}</h1>
                        </div>
                    </Col>
                </Row>
                <Row noGutters={true}>
                    <Col sm={8} md={8} >
                        <div className={`${this.props.id}-description description`}>
                            <h3>{this.props.name}</h3>
                            <p>{this.props.description}</p>
                        </div>
                    </Col>
                    <Col sm={4} md={4} >
                    <div className={`${this.props.id}-details details`}>
                        <h4>Deliverable</h4>
                        <p>{this.props.deliverable}</p>
                        <h4>Website</h4>
                        <p><a href={this.props.url}>{this.props.name}</a></p>
                    </div>
                    </Col>
                </Row> 
                </Container>
            
                )
        }
 };
        


export default ProjectComponent; 
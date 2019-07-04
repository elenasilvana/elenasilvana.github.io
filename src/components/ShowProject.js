import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Image from 'react-bootstrap/Image'

class NavDiv extends Component {
    render(){
        return (
    
        <div className="navigation-widget">
                {
                    <p><a href={`#${this.props.name}`}></a>{this.props.name}</p>      
                }
        </div>
        );
    }
};

/*     <Link className="about-botton"  to={`ROUTES.${this.props.route}`}>{this.props.name}</Link>

<img src={this.props.img} alt={`${this.props.name}-img`}></img>
*/

class ShowProject extends Component {
    render(){
        return (
                <div className="project-card container-fluid">
                    <div className="row">
                        <div className="col">
                            <Link to={ROUTES[this.props.route]}> 
                                {console.log(ROUTES, this.props.route)}
                                <div className="project-img" style={{backgroundImage: "url(" + this.props.img + ")"}}>
                                <p className="project-name" id="project.name">{this.props.name}</p>
                                <p>{this.props.category}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

    )}

}

export default ShowProject;
import React, { Component } from 'react';


class ShowProject extends Component {
    render(){
        return (
                <div className="project-card container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="project-img" style={{backgroundImage: "url(" + this.props.img + ")"}}>
                                <p id="project.name">{this.props.name}</p>
                                <p>{this.props.deliverable}</p>
                            </div>
                        </div>
                    </div>
                </div>

    )}

}

export default ShowProject;
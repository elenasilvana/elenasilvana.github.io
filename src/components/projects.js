import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import ShowCard from "./ShowCard";

const PROJECTS = require("../data/projects.json");

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
      const jsProject = PROJECTS.filter(
        project => project.id === "meet-pokemon"
      );
      console.log(jsProject);

      return (
        <div className="projects-grid">
          {jsProject.map(project => (
            <ShowCard
              img={project.img}
              name={project.name}
              description={project.description}
              tech={project.technologies}
              repository={project.repository}
              url={project.url}
            />
          ))}
        </div>
      );
    } else if (this.state.activeTab === 1) {
      /* React Project */
      const reactProjects = PROJECTS.filter(project => {
        return project.technologies.indexOf("React") > -1;
      });
      console.log(reactProjects);
      return (
        <div className="projects-grid">
          {reactProjects.map(project => (
            <ShowCard
              img={project.img}
              name={project.name}
              description={project.description}
              tech={project.technologies}
              repository={project.repository}
              url={project.url}
            />
          ))}
        </div>
      );
    } else if (this.state.activeTab === 2) {
      /* Node JS project */
      const nodeProjects = PROJECTS.filter(project => {
        return project.technologies.indexOf("Node") > -1;
      });
      console.log(nodeProjects);
      return (
        <div className="projects-grid">
          {nodeProjects.map(project => (
            <ShowCard
              img={project.img}
              name={project.name}
              description={project.description}
              tech={project.technologies}
              repository={project.repository}
              url={project.url}
            />
          ))}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Javascript</Tab>
          <Tab>React</Tab>
          <Tab>NodeJS</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;

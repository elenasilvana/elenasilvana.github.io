import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" style={{color: '#4e0041'}} title="Elena Silvana" scroll>
            <Navigation>
                <Link style={{color: '#4e0041'}} to="/resume">Resume</Link>
                <Link style={{color: '#4e0041'}} to="/aboutme">About Me</Link>
                <Link style={{color: '#4e0041'}} to="/projects">Projects</Link>
                <Link style={{color: '#4e0041'}} to="/contact" >Contact</Link>
            </Navigation>
        </Header>
        <Drawer style={{color: '#4e0041', background: 'transparent'}} title="" className="header-color">
            <Navigation>
                <Link style={{color: '#4e0041'}} to="/resume">Resume</Link>
                <Link style={{color: '#4e0041'}} to="/aboutme">About Me</Link>
                <Link style={{color: '#4e0041'}} to="/projects">Projects</Link>
                <Link style={{color: '#4e0041'}} to="/contact" >Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

/* */


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" style={{color: '#4e0041'}} title="Elena Silvana" scroll>
            <Navigation>
                <Link style={{color: '#4e0041', fontSize: '1.5em'}} to="/">Home</Link>
                <Link style={{color: '#4e0041', fontSize: '1.5em'}} to="/resume">Resume</Link>

                <Link style={{color: '#4e0041', fontSize: '1.5em'}} to="/projects">Projects</Link>
                <Link style={{color: '#4e0041', fontSize: '1.5em'}} to="/contact" >Contact</Link>
            </Navigation>
        </Header>
        <Drawer style={{color: 'grey', opacity: 0.8}} title="Menu" className="header-color">
            <Navigation>
                <Link style={{color: '#4e0041', fontSize: '1.5em'}} to="/">Home</Link>
                <Link style={{color: '#4e0041', fontSize: '1.5em'}} to="/resume">Resume</Link>

                <Link style={{color: '#4e0041', fontSize: '1.5em'}} to="/projects">Projects</Link>
                <Link style={{color: '#4e0041', fontSize: '1.5em'}} to="/contact" >Contact</Link>
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

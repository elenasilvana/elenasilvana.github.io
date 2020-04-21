(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l),i=(a(48),a(49),a(1)),c=a(16),s=a(5),m=a(6),p=a(8),u=a(7),d=a(9),h=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(i.Grid,{className:"landing-grid"},r.a.createElement(i.Cell,{col:12},r.a.createElement("img",{src:"https://i.postimg.cc/Y98PQvcg/Whats-App-Image-2019-07-28-at-19-46-16.jpg",alt:"avatar",className:"avatar-img"}),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h2",null,"Front End Developer"),r.a.createElement("hr",null),r.a.createElement("p",null," ","Javascript | React | Typescript | Redux | NodeJS | HTML/CSS | SASS | Express | MongoDB"),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{target:"_blank",href:"https://github.com/elenasilvana"},r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"})),r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/elena-silvana-c/"},r.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"})))))))}}]),t}(n.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Page"))}}]),t}(n.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-body"},r.a.createElement(i.Grid,{className:"contact-grid"},r.a.createElement(i.Cell,{col:6},r.a.createElement("div",{className:"contact-text"},r.a.createElement("h2",null,"Looking for me?"))),r.a.createElement(i.Cell,{col:6},r.a.createElement("div",{className:"contact-list"},r.a.createElement("h2",null,"Contact Me"),r.a.createElement("hr",null),r.a.createElement(i.List,null,r.a.createElement(i.ListItem,null,r.a.createElement(i.ListItemContent,{style:{fontSize:"1.8em",fontFamily:"Merriweather Sans",color:"#9da1aa"}},r.a.createElement("a",{href:"mailto:ele.silvana.c@gmail.com"},r.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"})))),r.a.createElement(i.ListItem,null,r.a.createElement(i.ListItemContent,{style:{fontSize:"1.8em",fontFamily:"Merriweather Sans",color:"#9da1aa"}},r.a.createElement("a",{target:"_blank",href:"https://github.com/elenasilvana"},r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"})))),r.a.createElement(i.ListItem,null,r.a.createElement(i.ListItemContent,{style:{fontSize:"1.8em",fontFamily:"Merriweather Sans",color:"#9da1aa"}},r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/elena-silvana-c/"},r.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"})))))))))}}]),t}(n.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(i.Card,{shadow:5,style:{minWidth:"40vh",margin:"auto"}},r.a.createElement(i.CardTitle,{style:{color:"#9c0c59",height:"40vh",background:"url(".concat(this.props.img,") center / cover"),alignItems:"center"}}),r.a.createElement(i.CardText,null,this.props.name," ",r.a.createElement("hr",null),this.props.description,r.a.createElement("h5",null,"Technologies:"),this.props.tech),r.a.createElement(i.CardActions,{border:!0},r.a.createElement("a",{target:"_blank",href:this.props.repository},r.a.createElement(i.Button,{colored:!0},"Github")),r.a.createElement("a",{target:"_blank",href:this.props.url},r.a.createElement(i.Button,{colored:!0},"LiveDemo"))),r.a.createElement(i.CardMenu,{style:{color:"#fff"}},r.a.createElement(i.IconButton,{name:"share"})))}}]),t}(n.Component),f=a(99),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).toggleCategories=function(){if(0===a.state.activeTab){var e=f.filter(function(e){return"meet-pokemon"===e.id});return console.log(e),r.a.createElement("div",{className:"projects-grid"},e.map(function(e){return r.a.createElement(b,{img:e.img,name:e.name,description:e.description,tech:e.technologies,repository:e.repository,url:e.url})}))}if(1===a.state.activeTab){var t=f.filter(function(e){return e.technologies.indexOf("React")>-1});return console.log(t),r.a.createElement("div",{className:"projects-grid"},t.map(function(e){return r.a.createElement(b,{img:e.img,name:e.name,description:e.description,tech:e.technologies,repository:e.repository,url:e.url})}))}if(2===a.state.activeTab){var n=f.filter(function(e){return e.technologies.indexOf("Node")>-1});return console.log(n),r.a.createElement("div",{className:"projects-grid"},n.map(function(e){return r.a.createElement(b,{img:e.img,name:e.name,description:e.description,tech:e.technologies,repository:e.repository,url:e.url})}))}},a.state={activeTab:0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"category-tabs"},r.a.createElement(i.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},r.a.createElement(i.Tab,null,"Javascript"),r.a.createElement(i.Tab,null,"React"),r.a.createElement(i.Tab,null,"NodeJS")),r.a.createElement(i.Grid,null,r.a.createElement(i.Cell,{col:12},r.a.createElement("div",{className:"content"},this.toggleCategories()))))}}]),t}(n.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(i.Grid,null,r.a.createElement(i.Cell,{col:4},r.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),r.a.createElement(i.Cell,{col:8},r.a.createElement("h4",{style:{marginTop:"0px"}},this.props.schoolDescription),r.a.createElement("p",null,this.props.schoolName)))}}]),t}(n.Component),k=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(i.Grid,null,r.a.createElement(i.Cell,{col:4},r.a.createElement("p",null,this.props.startYear)),r.a.createElement(i.Cell,{col:8},r.a.createElement("h4",{style:{marginTop:"0px"}},this.props.projectName),r.a.createElement("p",null,this.props.projectDescription)))}}]),t}(n.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(i.Grid,null,r.a.createElement(i.Cell,{className:"resume-description",col:4},r.a.createElement("h2",{style:{paddingTop:"3em"}},"Elena Silvana"),r.a.createElement("h4",{style:{color:"#d9d9d9"}},"Front-End Developer"),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),r.a.createElement("h3",null,"Contact Me :)!"),r.a.createElement(i.List,null,r.a.createElement(i.ListItem,null,r.a.createElement(i.ListItemContent,{style:{color:"#9da1aa"}},r.a.createElement("a",{href:"mailto:ele.silvana.c@gmail.com"},r.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"})))),r.a.createElement(i.ListItem,null,r.a.createElement(i.ListItemContent,{style:{color:"#9da1aa"}},r.a.createElement("a",{target:"_blank",href:"https://github.com/elenasilvana"},r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"})))),r.a.createElement(i.ListItem,null,r.a.createElement(i.ListItemContent,{style:{color:"#9da1aa"}},r.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/elena-silvana-c/"},r.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"}))))),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}}),r.a.createElement("a",{target:"_blank",href:"https://drive.google.com/file/d/1Yk1W5lNjnGI-Ln3EGFPG1qoBNQr3Qz-C/view?usp=sharing"},r.a.createElement("h4",null,"CV")),r.a.createElement("hr",{style:{borderTop:"3px solid #833fb2",width:"50%"}})),r.a.createElement(i.Cell,{className:"resume-right-col",col:8},r.a.createElement("h2",null,"Education"),r.a.createElement(v,{startYear:2012,endYear:2017,schoolName:"Escuela de Artes de la Secretar\xeda de Cultura Jalisco",schoolDescription:"Bachelor degree on Visual Arts"}),r.a.createElement(v,{startYear:2019,endYear:2019,schoolName:"Laboratoria",schoolDescription:"Front-End Developer"}),r.a.createElement("hr",{style:{borderTop:"3px solid #16a2ab"}}),r.a.createElement("h2",null,"Experience"),r.a.createElement(k,{startYear:2019,projectName:"Front-end developer at Itexico",projectDescription:"2019 - to date. Working with technologies such as React JS, Typescript, Redux, Redux saga, React hooks, SASS"}),r.a.createElement(k,{startYear:2019,projectName:"Japanese Syllabaries",projectDescription:"Web application where to learn Japanese Syllabaries Hiragana and Katakana and practice by playing a memory game"}),r.a.createElement(k,{startYear:2019,projectName:"BQ Back-End",projectDescription:"API REST for Burger Queen WebApplication"}),r.a.createElement(k,{startYear:2019,projectName:"Burger Queen",projectDescription:"WebApplication for restaurants to take orders, send the orders to the kitchen and check which orders are ready"}))))}}]),t}(n.Component),S=function(){return r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:h}),r.a.createElement(c.a,{path:"/aboutme",component:g}),r.a.createElement(c.a,{path:"/contact",component:E}),r.a.createElement(c.a,{path:"/projects",component:y}),r.a.createElement(c.a,{path:"/resume",component:j}))},N=a(13);var C=function(){return r.a.createElement("div",{className:"demo-big-content"},r.a.createElement(i.Layout,null,r.a.createElement(i.Header,{className:"header-color",style:{color:"#4e0041"},title:"Elena Silvana",scroll:!0},r.a.createElement(i.Navigation,null,r.a.createElement(N.b,{style:{color:"#4e0041",fontSize:"1.5em"},to:"/"},"Home"),r.a.createElement(N.b,{style:{color:"#4e0041",fontSize:"1.5em"},to:"/resume"},"Resume"),r.a.createElement(N.b,{style:{color:"#4e0041",fontSize:"1.5em"},to:"/projects"},"Projects"),r.a.createElement(N.b,{style:{color:"#4e0041",fontSize:"1.5em"},to:"/contact"},"Contact"))),r.a.createElement(i.Drawer,{style:{color:"grey",opacity:.8},title:"Menu",className:"header-color"},r.a.createElement(i.Navigation,null,r.a.createElement(N.b,{style:{color:"#4e0041",fontSize:"1.5em"},to:"/"},"Home"),r.a.createElement(N.b,{style:{color:"#4e0041",fontSize:"1.5em"},to:"/resume"},"Resume"),r.a.createElement(N.b,{style:{color:"#4e0041",fontSize:"1.5em"},to:"/projects"},"Projects"),r.a.createElement(N.b,{style:{color:"#4e0041",fontSize:"1.5em"},to:"/contact"},"Contact"))),r.a.createElement(i.Content,null,r.a.createElement("div",{className:"page-content"}),r.a.createElement(S,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(102),a(103);o.a.render(r.a.createElement(N.a,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,t,a){e.exports=a(104)},48:function(e,t,a){},49:function(e,t,a){},99:function(e){e.exports=[{name:"Japanese Syllabaries",img:"https://i.postimg.cc/MGzh2d1b/Selection-082.jpg",category:"Front-end development",deliverable:"WebApplication",description:"WebApplication for learning and practice Japanese Syllabaries",url:"https://elenasilvana.github.io/jp-syllabaries",technologies:"React, React-Hooks",uexd:"",frontskills:"",type:"Personal project",tools:"Git, Github",metodologies:"AGILE, kanban, User Story, sprint planning",repository:"https://github.com/elenasilvana/jp-syllabaries",route:"BURGERQUEEN",id:"japanese-syllabary"},{name:"Hands language",img:"https://i.postimg.cc/yxK8FVq2/Selection-054.png",category:"Front-end development",deliverable:"WebApplication",description:"WebApplication for learning and practice Mexican Sign Alphabet",url:"https://elenasilvana.github.io/TalentFestGDL002/",technologies:"React, Materialize",uexd:"",frontskills:"",type:"team collaboration",tools:"Git, Github",metodologies:"AGILE, kanban, User Story, sprint planning",repository:"https://github.com/elenasilvana/TalentFestGDL002",route:"BURGERQUEEN",id:"hand-languaje"},{name:"BQ BackEnd",img:"https://i.postimg.cc/R0m2BVPy/node-js-background.jpg",category:"Front-end development",deliverable:"API",description:"Web Server created with Node JS that handles requests from client (Burger Queen App) also manages database (MongoDB) communication.",url:"https://github.com/elenasilvana/GDL002-burger-queen-backend",technologies:"Node JS, Express, MongoDB, Heroku",uexd:"",frontskills:"API REST, npm, fetch, CLI, MongoDB, Postman",type:"individual",tools:"Git, Github",metodologies:"AGILE, kanban, User Story, sprint planning",repository:"https://github.com/elenasilvana/GDL002-burger-queen-backend",route:"MDLINKS",id:"md-links"},{name:"BurgerQueen",img:"https://i.postimg.cc/QCHGKmRc/1949831-1.jpg",category:"Front-end development",deliverable:"WebApplication",description:"WebApplication for restaurants to take orders, send the orders to the kitchen and check which orders are ready",url:"https://elenasilvana.github.io/GDL002-burger-queen/",technologies:"React, Materialize",uexd:"",frontskills:"",type:"individual",tools:"Git, Github",metodologies:"AGILE, kanban, User Story, sprint planning",repository:"https://github.com/elenasilvana/GDL002-burger-queen",route:"BURGERQUEEN",id:"burger-queen"},{name:"MD-links",img:"https://i.postimg.cc/R0m2BVPy/node-js-background.jpg",category:"Front-end development",deliverable:"npm package",description:"Command line application that validates if markdown files are available.",url:"https://github.com/elenasilvana/GDL002-md-links",technologies:"Node JS, ES6",uexd:"",frontskills:"http requests, npm, async functions, callbacks, CLI, regex",type:"individual",tools:"Git, Github",metodologies:"AGILE, kanban, User Story, sprint planning",repository:"https://github.com/elenasilvana/GDL002-md-links",route:"MDLINKS",id:"md-links"},{name:"Meet Pokemon",img:"https://i.postimg.cc/HLBDmsW-6/Icono-Pok-mon-GO.png",category:"Front-end development",deliverable:"WebApplication",description:"WebApplication aimed at kids or people who want to know about Pokemon or want to learn how to play Pokemon Go",url:"https://elenasilvana.github.io/GDL002-data-lovers/src",technologies:"ES6, HTML5, CSS3",uexd:"Ideation, sketching, prototyping, iteration testing",frontskills:"write unitary test, filter, ordering functions, array and objects manipulation, DOM events",type:"team collaboration",tools:"Git, GitHub Pages",metodologies:"AGILE, kanban, User Story, sprint planning",repository:"https://github.com/elenasilvana/GDL002-data-lovers",route:"MEETPOKEMON",id:"meet-pokemon"},{name:"Secret Cipher",img:"https://i.postimg.cc/bwN4N0KP/ciphercaesar.jpg",category:"Front-end development",deliverable:"WebApplication",description:"WebApplication that allows the user to cipher and decipher personal notes.",url:"https://elenasilvana.github.io/gdl-2019-01-bc-core-cipher/src/",technologies:"Javascript ES6, HTML, CSS3",uexd:"Ideation, sketching, iteration testing",frontskills:"unit testing, control structures, ASCII, array methods",type:"individual",tools:"Git, GitHub Pages, npm",metodologies:"AGILE, kanban, User Story, sprint planning",repository:"https://github.com/elenasilvana/gdl-2019-01-bc-core-cipher",route:"CIPHER",id:"secret-cipher"}]}},[[43,1,2]]]);
//# sourceMappingURL=main.26895b7c.chunk.js.map
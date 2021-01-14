import React from "react";
import Index from "pages/index";
import NewPage from "pages/newPage";
import NewPage1 from "pages/newPage1";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/new-page' component={NewPage}/>
			<Route exact path='/new-page1' component={NewPage1}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);

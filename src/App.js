import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

function App() {
    return (
            <Router>
                <Header />
                <Route path="/" exact component={PageOne} />
                <Route path="/page2" exact component={PageTwo} /> 
                <Route path="/page3" exact component={PageThree} />           
            </Router>
    );
}
export default App;

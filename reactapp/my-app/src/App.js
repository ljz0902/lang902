import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from "react-router-dom";
import Test1 from "./component/Test1";
import Test2 from "./component/Test2";
import Test3 from "./component/Test3";
const Foo = ({ match }) => {
    return (
        <h1>hello{match.params.id}</h1>
    )
}
function App() {
    return (
        <div className="App">
            <Router>
                <Link to="/54321">test1</Link> |
                <Link to="/test2">test2</Link> |
                <Link to="/foo/123456">foo</Link> |
                <Link to="/testrender">testrender</Link> |
                <Link to="redirect">redirect</Link> |
                <Switch>
                    <Route path="/foo/:id" componment={Foo} />
                    <Route path="/redirect" render={() => {
                        return (
                            <Redirect to="/1111" />
                        )
                    }} />
                    <Route path="/testrender" render={() => {
                        return (
                            <h1>hello world</h1>
                        )
                    }} />
                    <Route path="/test2" component={Test2} />
                    <Route path="/test3" component={Test3} />
                    <Route path="/:id" componment={Test1} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;


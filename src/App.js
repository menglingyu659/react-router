import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { BrowserRouter } from "./component/index";

function Home(props) {
  console.log(props);
  return <span>home</span>;
}

function Detail() {
  return <span>detail</span>;
}

function Info() {
  return <span>info</span>;
}

function No() {
  return <div>404</div>;
}

function App() {
  return (
    <div>
      <Router>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/detail">Detail</Link>
        </p>
        <p>
          <Link to="/info">Info</Link>
        </p>
        <p>
          <Link to="/none">none</Link>
        </p>
        <br />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
          <Route path="/info" component={Info}></Route>
          <Route component={No}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

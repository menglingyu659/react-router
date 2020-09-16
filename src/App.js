import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams,
//   useLocation,
//   useHistory,
//   withRouter,
// } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useLocation,
  useHistory,
  withRouter,
} from "./component";

function Home(props) {
  console.log(props);
  return <span>home</span>;
}

const HomeR = withRouter(function (props) {
  // const history = useHistory();
  // const location = useLocation();
  // const match = useRouteMatch();
  // const params = useParams();
  // console.log(history);
  // console.log(location);
  // console.log(match);
  // console.log(params);
  console.log(props);
  return <span>HomeR</span>;
});

function Detail(props) {
  console.log(props);
  return <span>detail</span>;
}

function Info(props) {
  console.log(props);
  return <span>info</span>;
}

function No(props) {
  console.log(props);
  return <div>404</div>;
}

function App() {
  return (
    <div>
      <Router>
        <p>
          <Link to="/123">Home</Link>
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
          <Route exact path="/:id" children={() => <HomeR a="a"></HomeR>} component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
          <Route path="/info" component={Info}></Route>
          <Route component={No}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

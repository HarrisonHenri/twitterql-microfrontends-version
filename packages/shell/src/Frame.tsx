import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "login/Login";

const Frame = ({ children, path = "home" }: {children: any, path?: string}) => {
return (  <Router>
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path={path}>
        {children}
      </Route>
    </Switch>    
  </Router>)
};

export default Frame;

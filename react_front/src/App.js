import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from './Components/index_main'
import Post from './Components/new_post'

function App(){
  return(
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/new_post" component={Post}/>
        </Switch>
      </Router>
    </div>
  )
}
export default App;
import React from "react";
//components
import Header from "./components/Header";
import Home from "./components/home/Home";
import DetailViews from "./components/post/DetailViews"
import {Box} from "@material-ui/core";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import CreateView from "./components/post/CreateView";
import UpdateView from "./components/post/UpdateView";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Box style={{marginTop: 64}}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/details' component={DetailViews} />
                <Route exact path='/create' component={CreateView}/>
                <Route exact path='/update' component={UpdateView}/>
            </Switch>
        </Box>
    </BrowserRouter>
  );
}

export default App;

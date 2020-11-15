import React, { Component} from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Main from '../pages/main'

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route  path = "/" component = {Main}/>
                </Switch>
            </BrowserRouter>
        )}
}

export default Router
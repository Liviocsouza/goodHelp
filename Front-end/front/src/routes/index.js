import React, { Component} from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Main from '../pages/Main'
import SignIn from '../pages/SignIn'

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component = {Main}/>
                    <Route exact path = "/Cadastro" component = {SignIn}/>
                </Switch>
            </BrowserRouter>
        )}
}

export default Router
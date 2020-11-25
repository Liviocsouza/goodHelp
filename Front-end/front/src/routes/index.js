import React, { Component} from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Main from '../pages/Main'
import SignIn from '../pages/SignIn'
<<<<<<< HEAD
import Consulta from '../pages/Consulta'
=======
import LoginIn from '../pages/Login'
>>>>>>> ec6f5ca036e55885107b03bbb0efe5babf7c46c1

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component = {Main}/>
                    <Route exact path = "/Cadastro" component = {SignIn}/>
<<<<<<< HEAD
                    <Route exact path = "/Consulta" component = {Consulta}/>

=======
                    <Route exact path = "/Entrar" component = {LoginIn}/>
>>>>>>> ec6f5ca036e55885107b03bbb0efe5babf7c46c1
                </Switch>
            </BrowserRouter>
        )}
}

export default Router
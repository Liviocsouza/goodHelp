import React, { Component } from 'react'
import Link from  '../../objects/Link'

import logo from './logogoodhelp.png'
import {  SignIn, Container, ContainerMain, Welcome, ContainerInfo, ContainerLoginIn, ButtomHead, TermBox, TermText, } from '../../componentes/ContainersUser'

class LoginIn extends Component{
    render() {
        return(
            <ContainerMain>
                <Container>
                <img alt = "Logo" src =  {logo} width = "248" height = "177"/>
                <ContainerLoginIn>
                    <SignIn>
                    <Link to = "/">Entre</Link>
                    </SignIn>
                    <Welcome>
                    <Link to = "/">Bem vindo! Por favor entre com suas credenciais.</Link>
                    </Welcome>                    
                    <ContainerInfo>
                        (DDD)Celular ou Email
                    </ContainerInfo>
                    <ContainerInfo>
                        Senha
                    </ContainerInfo>                   
                    <TermBox><TermText>Aceite os Termos de Políticca e Privacidade</TermText></TermBox>  
                    <ButtomHead>
                        Entrar
                    </ButtomHead>
                </ContainerLoginIn>
                </Container>
            </ContainerMain>
        )
    }
}

export default LoginIn
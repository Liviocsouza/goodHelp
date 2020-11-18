import React, { Component } from 'react'
import Link from  '../../objects/Link'

import logo from './logogoodhelp.png'
import {  SignIn, Container, ContainerMain, Welcome, ContainerInfo, ContainerSignIn, ButtomHead } from '../../componentes/ContainersCadastro'

class SignInn extends Component{
    render() {
        return(
            <ContainerMain>
                <Container>
                <img alt = "Logo" src =  {logo} width = "248" height = "177"/>
                <ContainerSignIn>
                    <SignIn>
                    <Link to = "/">Cadastre-se</Link>
                    </SignIn>
                    <Welcome>
                    <Link to = "/">Bem vindo! Por favor entre com suas credenciais.</Link>
                    </Welcome>
                    <ContainerInfo>
                        "Nome completo"
                    </ContainerInfo>
                    <ContainerInfo>
                        "CPF"
                    </ContainerInfo>
                    <ContainerInfo>
                        "(DDD)Celular ou Email"
                    </ContainerInfo>
                    <ContainerInfo>
                        "Senha"
                    </ContainerInfo>
                    <ContainerInfo>
                        "Repetir senha"
                    </ContainerInfo>
                    <ButtomHead>
                        Cadastre-se
                    </ButtomHead>
                </ContainerSignIn>
                </Container>
            </ContainerMain>
        )
    }
}

export default SignInn
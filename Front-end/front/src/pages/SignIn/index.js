import React, { Component } from 'react'
import Link from  '../../objects/Link'

import logo from './logogoodhelp.png'
import {  SignIn, Container, ContainerMain, Welcome, ContainerInfo, ContainerSignIn, ButtomHead, TermBox, TermText, Login, SocialLogin } from '../../componentes/ContainersUser'

class SignUp extends Component{
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
                        Nome completo
                    </ContainerInfo>
                    <ContainerInfo>
                        CPF
                    </ContainerInfo>
                    <ContainerInfo>
                        (DDD)Celular ou Email
                    </ContainerInfo>
                    <ContainerInfo>
                        Senha
                    </ContainerInfo>
                    <ContainerInfo>
                        Repetir senha
                    </ContainerInfo>
                    <TermBox><TermText>Aceite os Termos de Políticca e Privacidade</TermText></TermBox>  
                    <ButtomHead>
                        Cadastre-se
                    </ButtomHead>
                    <Login>
                        Ou logue por: <SocialLogin> Facebook | LikedIn | Google </SocialLogin>   
                    </Login>
                </ContainerSignIn>
                </Container>
            </ContainerMain>
        )
    }
}

export default SignUp
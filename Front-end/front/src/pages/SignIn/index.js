import React, { Component } from 'react'
import Link from  '../../objects/Link'

import logo from './logogoodhelp.png'
import {  SignIn, Container, ContainerMain, Welcome, ContainerInfo, ContainerSignIn, ButtomHead, TermBox, TermText, HeaderLista } from '../../componentes/ContainersCadastro'

class SignInn extends Component{
    render() {
        return(
<<<<<<< HEAD
            <div>Tela de login</div>
            // <ContainerMain>
            //     <Container>
            //     <img src =  {logo} width = "248" height = "177"/>
            //     <ContainerSignIn>
            //         <SignIn>
            //         <li><Link to = "/">Cadastre-se</Link></li>
            //         </SignIn>
            //         <Welcome>
            //         <li><Link to = "/">Bem vindo! Por favor entre com suas credenciais.</Link></li>
            //         </Welcome>
            //         <ContainerData>
            //             <input type = "text">Nome completo</input>
            //         </ContainerData>
            //     </ContainerSignIn>
            //     </Container>
            // </ContainerMain>
=======
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
                    <HeaderLista>
                        Ou logue por:
                        Facebook
                        LinkedIn
                        Google
                    </HeaderLista>
                </ContainerSignIn>
                </Container>
            </ContainerMain>
>>>>>>> 8a853d8c39e154cf91a365db6210ef9f300c2487
        )
    }
}

export default SignInn
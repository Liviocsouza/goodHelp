import React, { Component } from 'react'
import Link from  '../../objects/Link'

import logo from './logo.png'
import { Header, SignIn, HeaderLista, Container, ButtomHead, ContainerMain, Welcome, ContainerData, ContainerSignIn} from '../../componentes/ContainersCadastro'

class SignInn extends Component{
    render() {
        return(
            <ContainerMain>
                <Container>
                <img src =  {logo} width = "248" height = "177"/>
                <ContainerSignIn>
                    <SignIn>
                    <li><Link to = "/">Cadastre-se</Link></li>
                    </SignIn>
                    <Welcome>
                    <li><Link to = "/">Bem vindo! Por favor entre com suas credenciais.</Link></li>
                    </Welcome>
                    <ContainerData>
                        <input type = "text">Nome completo</input>
                    </ContainerData>
                </ContainerSignIn>
                </Container>
            </ContainerMain>
        )
    }
}

export default SignInn
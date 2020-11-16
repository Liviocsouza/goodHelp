import React, { Component } from 'react'
import Link from  '../../objects/Link'

import logo from './logo.png'
import {Header, HeaderLista, Container, ButtomHead, ContainerMain} from '../../componentes/ContainersHead'
import Banner from './Banner'

class Main extends Component {
    render(){
        return(
            <ContainerMain>
                <Container>
                    <Header>
                        <img src =  {logo} width = "174" height = "124"/>
                        <HeaderLista>
                            <li><Link to = "/">Fale conosco</Link></li>
                            <li><Link to = "/">Conheça nossos(as) especialistas</Link></li>
                            |
                            <li><Link to = "/"> Entre</Link></li>
                            <ButtomHead>Cadraste-se</ButtomHead>
                        </HeaderLista>
                    </Header>
                </Container>
                <Banner/>


            </ContainerMain>

        )

    }

}

export default Main
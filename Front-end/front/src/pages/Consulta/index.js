import React, { Component } from 'react'
import Link from  '../../objects/Link'

import logo from './logogoodhelp.png'
import {Header, HeaderLista, Container, ButtomHead, ContainerMain} from '../../componentes/ContainersHead'
import {Banner, Opacidade} from './Banner'
import Titulo from '../../objects/Titulo'
import SubTitulo from '../../objects/SubTitulo'
import {ButaoBusca, Input} from '../../objects/Input'
import {ContainerPrincipal , ContainerRight, ContainerLeft}from '../../componentes/ContainerInfo'
import {BordaLista } from '../../objects/Borda'
import Footer from './Footer'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            buscar:""
        }
        this.buscarBanco = (evento) =>{
            this.setState({nome: evento.target.value})
        };
    }
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

                <Container>
                    <ConsultaList consulta = {[
                        {nome: "jose", avaliacao: 5, especialidades: "Depressão, ansiedade, ataque de panico"},
                        {nome: "Carlos", avaliacao: 4, especialidades: "Depressão, ansiedade, ataque de panico"},
                        {nome: "Julia", avaliacao: 4, especialidades: "Depressão, ansiedade, ataque de panico"},
                        {nome: "Roberta", avaliacao: 5, especialidades: "Depressão, ansiedade, ataque de panico"}

                    ]}/>

                </Container>
                



            </ContainerMain>
            

        )

    }

}

export default Main
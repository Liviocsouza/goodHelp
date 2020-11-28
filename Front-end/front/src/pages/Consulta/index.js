import React, { Component } from 'react'
import {Link} from  'react-router-dom'

import logo from '../Main/logogoodhelp.png'
import {Header, HeaderLista, Container, ButtomHead, ContainerMain} from '../../componentes/ContainersHead'
import ConsultaList from './ConsultaList'
import avatar from './avatar.png'
import {ButaoBusca, Input} from '../../objects/Input'
import Titulo from '../../objects/Titulo'
import DatePicker from 'react-datepicker'


class Consulta extends Component {
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
                            <li><Link to = "/Cadastro" style = {{textDecoration: 'none',color: "black"}}>Fale conosco</Link></li>
                            <li><Link to = "/consulta" style = {{textDecoration: 'none',color: "black"}}>Conheça nossos(as) especialistas</Link></li>
                            |
                            <li><Link to = "/Cadastro" style = {{textDecoration: 'none',color: "black"}}> Entre</Link></li>
                            <ButtomHead ><Link to = "/Cadastro" style = {{textDecoration: 'none',color: "black"}}>Cadraste-se</Link></ButtomHead>
                        </HeaderLista>
                    </Header>
                    
                </Container>
           
                <Container >
                    {/* <div style = {{marginBottom:"10px"}}>
                    <Titulo color = "#FF7A00" size = "50px" top = "100px" >Encontre seu(a) psicologo(a) </Titulo>
                    <Input placeholder = "Descreva um motivo" 
                        value = {this.state.nome} 
                        onChange={this.buscarBanco}
                        type ="text"
                        top = "190px"/>
                        <ButaoBusca top = "190px" left = "575px">Encontrar profissional</ButaoBusca>

                    </div> */}
                     
                    <ConsultaList consulta = {[
                        {nome: "jose", avaliacao: 5, especialidades: "Depressão, ansiedade, ataque de panico", imagem:avatar},
                        {nome: "Carlos", avaliacao: 4, especialidades: "Ansiedade",imagem:avatar},
                        {nome: "Julia", avaliacao: 4, especialidades: "Depressão", imagem:avatar},
                        {nome: "Roberta", avaliacao: 5, especialidades: "Depressão, ansiedade", imagem:avatar}
                    ]}/>

                </Container>
                



            </ContainerMain>
            

        )

    }

}

export default Consulta
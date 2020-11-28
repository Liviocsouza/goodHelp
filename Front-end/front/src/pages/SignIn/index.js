import React, { Component } from 'react'
import Link from  '../../objects/Link'
import { Input} from '../../objects/Input'
import logo from './logogoodhelp.png'
<<<<<<< HEAD
import {  SignIn, Container, ContainerMain, Welcome, ContainerInfo2,ContainerInfo, ContainerSignIn, ButtomHead, TermBox, TermText, Login, SocialLogin } from '../../componentes/ContainersUser'
=======
import {  SignIn, Container, ContainerMain, Welcome, ContainerInfo, ContainerSignIn, ButtomHead, TermBox, TermText,  } from '../../componentes/ContainersUser'
>>>>>>> f044a176cc3d4c08c9bcb23732169b332e5aa719

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome:"",
            contato:"",
            senha:"",
            repetirSenha:""
        }
      
        
        this.onChange = (evento) =>{
            this.setState({nome: evento.target.value})
        };
        this.changContato = (evento) =>{
            this.setState({contato: evento.target.value})
        };
        this.changSenha = (evento) =>{
            this.setState({senha: evento.target.value})
        };
        this.changNome = (evento) =>{
            this.setState({senha: evento.target.value})
        };
    }

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
                    <ContainerInfo2 
                        placeholder = "Nome completo" 
                        value = {this.state.nome} 
                        onChange={this.onChange}
                        type ="text"
                    
                    />
                    <ContainerInfo2 
                        placeholder = "(DDD)Celular ou Email" 
                        value = {this.state.contato} 
                        onChange={this.changContato}
                        type ="text"
                    />
                    
                    
                    <ContainerInfo2 
                    placeholder = "Senha" 
                    value = {this.state.senha} 
                    onChange={this.changSenha}
                    type ="password"
                    />
                    
                    <ContainerInfo>
                        Repetir senha
                    </ContainerInfo>
                    <TermBox><TermText>Aceite os Termos de Políticca e Privacidade</TermText></TermBox>  
                    <ButtomHead>
                        Cadastre-se
                    </ButtomHead>
                </ContainerSignIn>
                </Container>
            </ContainerMain>
        )
    }
}

export default SignUp
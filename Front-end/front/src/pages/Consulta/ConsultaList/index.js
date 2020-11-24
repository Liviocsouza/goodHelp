import React, {Component} from 'react'
import {StyledContainer} from './styles'

const Container = ({children}) => <StyledContainer>{children}</StyledContainer>

class ConsultaList extends Component{
    constructor(props){
        super(props);
        this.state = { consultas : this.props.consulta};
    }

    render(){
        return(
            <Container>
                {
                    this.state.consultas.map(c => {
                        return(
                            <div>
                                
                            </div>

                        )

                    })
                }

            </Container>



        )
    }

}

export { Header, HeaderLista, Container, ButtomHead, ContainerMain}
import React, {Component} from 'react'
import {StyledContainer, StyledItem} from './styles'
import Titulo from '../../../objects/Titulo'

const Container = props => (<StyledContainer {...props} >{props.children}</StyledContainer>)
const Item = props => (<StyledItem {...props}>{props.children}</StyledItem>)


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
                            <Item>
                                <div style= {{display:"flex"}}>
                                <img src = {c.imagem}/>
                                    <div>
                                    <h2>{c.nome}  {c.avaliacao}</h2> 
                                    
                                    <h2>Especialidades:</h2>
                                    <p>{c.especialidades}</p>
                                    </div>
                                  
                                </div>    

                                
                                
                            </Item>
 
                        )

                    })
                }

            </Container>



        )
    }

}

export default  ConsultaList
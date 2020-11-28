import React, {Component} from 'react'
import {StyledContainer, StyledItem} from './styles'
import Titulo from '../../../objects/Titulo'
//import DatePicker from 'react-datepicker'
import DatePicker, { DateInput, TimeInput } from '@trendmicro/react-datepicker';
import '@trendmicro/react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const Container = props => (<StyledContainer {...props} >{props.children}</StyledContainer>)
const Item = props => (<StyledItem {...props}>{props.children}</StyledItem>)


class ConsultaList extends Component{
    constructor(props){
        super(props);
        this.state = { consultas : this.props.consulta,
                       date : moment().format('YYYY-MM-DD')};
    }
    

    render(){
        return(
            <Container>
                {
                    
                    this.state.consultas.map(c => {
                        return(
                            
                            <Item>
                                    
                                 <div style= {{display:"flex"}}>
                                <img src = {c.imagem} style = {{width: "300px", height: "300px"}}/>
                                    <div>
                                    <h2>{c.nome}  {c.avaliacao}</h2> 
                                    
                                    <h2>Especialidades:</h2>
                                    <p>{c.especialidades}</p>
                                    <div>
                                   <DatePicker
                                        
                                        date = {this.state.date}
                                        onSelect = {date =>{
                                            this.setState(state =>({date:date}));
                                        }}
                                    />

                                    <button>Marcar consulta</button>
                                    </div>
                                    

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
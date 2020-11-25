import styled from 'styled-components'

const StyledContainer = styled.div`
    width:84%;
    margin-left:-60px;
    display: grid;
    grid-template-columns: auto;
    background-color: white;
    padding: 10px;
    border-radius: 10px;

    
`
const StyledItem = styled.div`
    float:${({float}) => float};

`



export { StyledContainer, StyledItem } 
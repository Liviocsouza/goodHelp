import styled from 'styled-components'


const StyledPrincipal = styled.div`
    flex-direction: 'row';
    background-color:red;
    height:500px;
    position:relative;
    top:660px;
    flex:1;

`

const StyledLeft = styled.div`
    background-color:blue;
    //display:flex;
    height:500px;
    width:820px;
`
const StyledRight = styled.div`
    background-color:burlywood;
    margin-top:-520px;
    margin-left:820px;
    width:600px;
    height:500px;
    flex-direction:row;
`

export {StyledPrincipal,StyledLeft, StyledRight}
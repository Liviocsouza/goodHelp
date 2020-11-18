
import styled from 'styled-components'

const StyleContainerMain = styled.div`
    width:100%;
    align-items:center;
    height: 2000px;

    
`
const StyledContainer = styled.div`
    background-color: #CAC9C7;
    padding-right: 30px;
    padding-left : 30px;
    width:100%;
    align-items:center;
    justify-content: center;
    display:flex;
    flex-direction:row;
`

const StyledHead = styled.div`
    width: 1170px;
    height: 158px;
    float:left;
    display:flex;
    align-items: center;
    

`
const StyledLista = styled.ul  `
    overflow-x:auto;
    padding-right: 15px;
    width:80%;
    justify-content:space-around;
    li{
        list-style :none;
        margin:50px;
        display: inline-block;
        font-size:20px;
        font-family:Offside;
        color:black;
    }
`
const StyledButtom = styled.button`
    width:151px;
    height:50px;
    align-items:center;
    background-color:#FF7A00;
    border-radius:50px;

`


export { StyledHead,StyledLista, StyledContainer, StyledButtom,StyleContainerMain } 
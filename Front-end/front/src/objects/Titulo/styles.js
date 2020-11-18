import styled from 'styled-components'


const StyledTitulo = styled.h1`
    //color:#FF7A00;
    color: ${({color}) => color};
    position: absolute;
    width: 711px;
    height: 90px;
    left: 100px;
    top: 80px;
    font-weight: 600;
    font-size: 50px;
    line-height: 45px;

`

export default StyledTitulo
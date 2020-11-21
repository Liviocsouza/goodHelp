import React from 'react'
import { StyledSignIn, StyledContainer, StyledButtom,StyledContainerMain, StyledLista, StyledWelcome, StyledContainerInfo, StyledContainerSignIn, StyledTermBox, StyledTermText }  from './styles'

const Container = ({children}) => <StyledContainer>{children}</StyledContainer>
const SignIn = ({children}) => <StyledSignIn>{children}</StyledSignIn>
const ButtomHead = ({children}) => <StyledButtom>{children}</StyledButtom>
const ContainerMain = ({children}) => <StyledContainerMain>{children}</StyledContainerMain>
const HeaderLista = ({children}) => <StyledLista>{children}</StyledLista>
const Welcome = ({children}) => <StyledWelcome>{children}</StyledWelcome>
const ContainerInfo = ({children}) => <StyledContainerInfo>{children}</StyledContainerInfo>
const ContainerSignIn = ({children}) => <StyledContainerSignIn>{children}</StyledContainerSignIn>
const TermBox = ({children}) => <StyledTermBox>{children}</StyledTermBox>
const TermText = ({children}) => <StyledTermText>{children}</StyledTermText>

export { SignIn, HeaderLista, Container, ButtomHead, ContainerMain, Welcome, ContainerInfo, ContainerSignIn, TermBox, TermText }
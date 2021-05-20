import React from 'react'
import styled from "styled-components";
import LoginDialog from '../components/modal/LoginDialog';
import RegisterDialog from '../components/modal/RegisterDialog';
import fondo from "../img/peli.jpg";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {Logo} from '../components/Navbar/icons/Logo'

/* 
sm: 576px,
md: 768px,
lg: 992px,
xl: 1200px,
xxl: 1400px 
*/
const Container = styled.div`
    min-height:100vh;
    background-color:#70040A;

`
const NavIndex = styled.div`
    padding-left:30px;
    padding-right:30px;
    width: 100%;
    background-color:black;
    min-height:8vh;
    display: flex;
    justify-content:space-between;
    align-items:center;
`

const BodyIndex = styled.div`
    width: 100%;
    background-image: url(${({grabadora})=>grabadora});
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    height:92vh;
`
const ContainerSN = styled.div`

    display: flex;
    justify-content:space-between;
    width: 200px;
    @media (max-width: 576px) {
        width: 150px;
    }
`
const ContainerLogoLogin = styled.div`
    width: 30%;

    display: flex;
    align-items:center;
    @media (max-width: 992px) {
        width: 40%;
    }
    @media (max-width: 768px) {
        width: 50%;
    }
    @media (max-width: 576px) {
        width: 60%;
    }
`
const ButtonYouTube = styled.a`
    background-color: #70040A;
    display: flex;
    justify-content:center;
    align-items:center;
    padding:10px;
    border-radius: 50%;
    color:white;
`;
const ButtonTwitter = styled.a`
 background-color: #70040A;
     display: flex;
    justify-content:center;
    align-items:center;
    padding:10px;
    color:white;
    border-radius: 50%;
`;
const ButtonInstagram = styled.a`
     background-color: #70040A;
    display: flex;
    justify-content:center;
    align-items:center;
    padding:10px;
    color:white;
    border-radius: 50%;
`;
const ContainerRegister = styled.div`
    width: 50%;
    height:50%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    border-radius: 15px;
    opacity: 0.8;
    background-color:#70040A;
    @media (max-width: 992px) {
        width: 80%;
        height:70%;
    }
`
const RegisterTitles = styled.p`
    font-size:50px;
    margin:0;
    color:gray;
    font-weight:bold;
    text-align: center;
    @media (max-width: 992px) {
        font-size:40px;

    }
`
const RegisterQuestion = styled.p`
    font-size:30px;
    margin:15px 0;
    color:gray;
    font-weight:bold;
    text-align: center;

    @media (max-width: 992px) {
        font-size:20px;

    }
`

const ContenedorImagenes = styled.div`
    width: inherit;
    height: inherit;
    display: flex;
    justify-content:center;
    align-items: center;
    background: rgba(0,0,0,0.8);
    backdrop-filter: saturate(180%);

`

export const IndexScreen = () => {


    return (
        <Container>
            
            <NavIndex>
                <ContainerLogoLogin>
                    <Logo/>
                    <LoginDialog/>
                </ContainerLogoLogin>
                <ContainerSN>
                    <ButtonYouTube href="https://www.youtube.com/">
                        <YouTubeIcon/>
                    </ButtonYouTube>
                    <ButtonTwitter href="https://twitter.com/">
                        <TwitterIcon />
                    </ButtonTwitter>
                    <ButtonInstagram href="https://www.instagram.com/">
                        <InstagramIcon/>
                    </ButtonInstagram>
                </ContainerSN>
            </NavIndex>
            <BodyIndex grabadora={process.env.PUBLIC_URL + '/img/peliculas.jpg'}>
                <ContenedorImagenes >
  
                
                    <ContainerRegister>
                        <RegisterTitles>Organize your movies</RegisterTitles>
                        <RegisterQuestion>Have you seen a lot of movies?</RegisterQuestion>
                        <RegisterDialog/>
                    </ContainerRegister>
                </ContenedorImagenes>
            </BodyIndex>
        </Container>
    )
}

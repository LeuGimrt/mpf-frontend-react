import styled from "styled-components";

import IconButton from '@material-ui/core/Button';

export const AppContainer = styled.div`
    width: 100vw;
    height: 80%;
    display: flex;
    flex-flow: column;
    padding: 0px 25px 0px 85px
`;

export const Logo = styled.img`
    margin-left: 30px;
`;

export const LateralBarContainer = styled.div`
    height: 90vh;
    width: 60px;

    background-color: white;
    box-sizing: border-box;
    border: 2px solid #969696;
    border-radius: 50px 50px 0px 0px;
    border-bottom-width: 0px;

    position: absolute;
    left: 0;
    bottom:0;
    
    display: flex;
    flex-flow: column;
    align-items: center;


`;

export const ProfileImage = styled.img`
    height: 40px;
    width: 40px;
    display: block;

    background-color: lightcoral;
    margin: 20px 0px;
    border-radius: 50px;
`;

export const Separator = styled.div`
    height: 5px;
    width: 85%;
    margin-bottom: 10px;
    background-color: gray;
`;

export const LateralBarOptionsContainer = styled.div`
    margin-top: 10px;
    margin-bottom: auto;

    display: flex;
    flex-flow: column;
    align-items: center;
    
    &:last-child{
        margin-bottom: 0;
    }
`;

export const LateralBarButton = styled(IconButton)`
    &&&{
        display: block;
        padding: 10px;
        width: 10px;
        margin-bottom: 1px;
        transform: scale(0.8);
    }

    & svg{
        transform: scale(1.5);
    }

    &.Mui-disabled{
        background: rgba(0,0,0,20%);
        color: black;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    height: 60px;
    width: 100%;
    align-items: center;
    
    @media (max-width: 768px){
        justify-content: center;
    }
`;

export const HeaderLogo = styled.img`
    margin-left: 30px;
`;

export const HeaderUserContainer = styled.div`
    background: #F5F2EC;
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 100%;
    width: 350px;

    border-radius: 0 0 0 45px;

    margin-left: auto;


    font-weight: bold;
    word-spacing: 15px;

    @media (max-width: 768px){
        display: none
    }

`;
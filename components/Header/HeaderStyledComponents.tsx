import styled from "styled-components"

export const ThemeButton = styled.button`

        background-image:${props => props.theme.headerButtonImage};
        width: 80px;
        height: 80px;
        margin-right: 60px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        @media (max-width: 440px) {     
                margin-right: 36px;
        }

        @media (max-width: 400px) {
                margin-right: 28px;
        }

        @media (max-width: 380px) {
                margin-right: 22px;
        }

        @media (max-width: 340px) {
                margin-right: 10px;
        }

`

export const CusstomLink = styled.a`  
        color:${props => props.theme.header.color};
        position: relative;
        font-weight: 500;
        text-transform: uppercase;
        padding: 15px 0;
        letter-spacing: 6px;

        &::after {
        content: "";
        position: absolute;
        top: 40%;
        left: 0;
        right: 0;
        height: 2px;
        width: 100%;
        opacity: 0;
        background-color: ${props => props.theme.header.color};
        transition: all, 0.45s;
        }

        &:hover::after {
        opacity: 1;
        top: 100%;
        transition: all, 0.45s;
        }
        @media (max-width: 930px) {
        display: block;
        padding: 15px;
        text-align: center;
        transition: color, 0.45s;
        }
`
export const BurgerItem = styled.div` 
        background-color:${props => props.theme.header.color};
        position: absolute;
        left: 0;
        width: 100%;
        height: 5px;
        border-radius: 6px;
        opacity: 0.9;
        transition: all, 0.45s;
`
export const BurgerItem1 = styled(BurgerItem) <Iactive>`
        top: 0;
        opacity: ${props => props.active ? "0" : "1"};
`
export const BurgerItem2 = styled(BurgerItem) <Iactive>`
        top: 50%;
        transform:${props => props.active ? "translateY(-50%) rotate(45deg)" : "translateY(-50%)"};
`
export const BurgerItem3 = styled(BurgerItem) <Iactive>`
        top: 50%;
        transform:${props => props.active ? "translateY(-50%) rotate(-45deg)" : "translateY(-50%)"};
`
export const BurgerItem4 = styled(BurgerItem) <Iactive>`
        bottom: 0;
        opacity: ${props => props.active ? "0" : "1"};
`

export const HeaderNav = styled.nav<Iactive>`
    @media (max-width: 930px){
        width: 50vw;
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme.header.background};
        box-shadow: -1px -1px 11px 2px #fff;
        transform: ${props => props.active ? "translateX(0)" : "translateX(1000px)"};

        }
        transition: all, 0.45s;
        @media (max-width: 666px) {
                width: 100vw;
        }

`
export const HeaderItem = styled.li`
        display: inline-block;
        &:not(:last-child) {
            margin-right: 70px;
        }
        @media (max-width: 930px) {
                width: 80%;
                margin: 10px 0;
                &:not(:last-child) {
                margin-right: 0;
                }
        }
`
export const StyledHeader = styled.header`
        padding-top: 20px;
        position: absolute;
        z-index: 3;
        top: 0;
        left: 0;
        right: 0;
        margin-top: 0;
        transition: all, 0.45s;

        &.fixed {
                position: fixed;
                z-index: 5;
                background-color: ${props => props.theme.header.background};
                box-shadow: -1px -1px 11px 2px ${props => props.theme.header.color};
                padding: 15px 0;
                transition: all, 0.45s;
                animation: headerFixed 0.5s;
        }

        &.fixed .header__inner {
        padding: 5px 0;
        }
        @keyframes headerFixed {
                0% {
                opacity: 0;
                box-shadow: 0px -3px 12px 1px ${props => props.theme.header.color};
                        }
                100% {
                opacity: 1;
                box-shadow: 0px -1px 11px 2px ${props => props.theme.header.color};
                }
        }
       
`

interface Iactive {
        active: boolean
}
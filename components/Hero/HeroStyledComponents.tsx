import styled from 'styled-components'

export const HeroParagraph = styled.p`
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.4px;
        line-height: 32px;
        margin-bottom: 50px;
        color:${props => props.theme.hero.p};
        @media (max-width: 910px) {
        line-height: 26px;
        letter-spacing: 0.3px;
        margin-bottom: 25px;
    
}

@media (max-width: 870px) {

        color: inherit;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.4px;
        line-height: 32px;
        margin-bottom: 35px;
  
}

@media (max-width: 666px) {

        font-size: 17px;
        letter-spacing: 0.3;
        line-height: 26px;
    
}
`
export const HeroWrap = styled.div`
    position: relative;
    &::after {
        content: "";
        z-index: 0;
        position: absolute;
        width: 81%;
        height: 81%;
        right: 0;
        top: 0;
        /* opacity: 0.22; */
        mix-blend-mode: normal;
        background:${props => props.theme.hero.background};
        filter:${props => props.theme.hero.filter};
        transition: background-color, filter, 0.45s;
    
        @media (max-width: 975px) { 
            width: 84%;
            height: 80%;
        }
        @media (max-width: 910px) {
            width: 84%;
            height: 80%;
        }
        @media (max-width: 870px) {
            width: 85%;
            height: 85%;
        }
        @media (max-width: 730px) {
            right: auto;
            left: 0;
            width: 80%;
        }
        @media (max-width: 610px) {
            width: 90%;
            height: 91%;
        }
        @media (max-width: 450px) {
            width: 100%;
            height: 91%;
        }
    }

`
export const HeroLink = styled.a`
    position: relative;
    display: inline-block;
    padding: 5px 0;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color:${props => props.theme.hero.link} ;
    transition: color, 0.45s;

    &:not(:last-child) {
        margin-right: 20px;
    }

    &::after,
    &::before {
        content: "";
        position: absolute;
        bottom: -1px;
        height: 2px;
        width: 0;
        opacity: 0;
        background-color:${props => props.theme.hero.link};
        transition: all, 0.45s;
    }

    &::after {
        left: 50%;
    }

    &::before {
        right: 50%;
    }

    &:hover::after,
    &:hover::before {
        opacity: 1;
        width: 50%;
    }

`
export const Button = styled.div`
    display: inline-block;
    background-color:${props => props.theme.contact.background};
    transition: background-color, 0.45s;
    @media (max-width: 870px){
        position: absolute;
        right: 4%;
        bottom: 110px;
    }
    @media (max-width: 666px) {
        right: 0.1%;
    }
    @media (max-width: 610px) {
        bottom: 30px;
        right: 2%;
    }
    @media (max-width: 450px) {
        left: 0;
        right: 0;
        width: 100%;
    }
`
export const ButtonLink = styled.a`
    color:${props => props.theme.hero.color};
    display: inline-block;
    padding: 36px 42px;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 8px;
    line-height: 24px;
    mix-blend-mode: normal;
    opacity: 0.55;
    transition: all, 0.45s;

    &:hover {
        opacity: 1;
        box-shadow: 0px 0px 11px 2px ${props => props.theme.hero.btnShadow};
    }

    @media (max-width: 450px) {
        display: block;
        width: 100%;
        height: 100%;
        padding: 36px 0;
    }
`
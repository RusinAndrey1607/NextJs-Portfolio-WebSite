import styled from "styled-components";

export const AboutParagraph = styled.div`
    margin-bottom: 60px;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0.38px;
`
export const SmallAboutParagraph = styled(AboutParagraph)`
        margin: 35px 0;
        max-width: 540px;
  @media(max-width: 1000px){
        max-width: 100%;
        margin-top: 100px;
  }

  @media (max-width: 700px){
        max-width: 100%;
        margin-top: 235px;
  }
`
export const Contact = styled.div`
        position: absolute;
        right: 125px;
        top: -200px;
        padding: 25px;
        max-width: 400px;
        width: 100%;
        background: ${props => props.theme.contact.background};
        color:${props => props.theme.contact.color};

        @media (max-width: 1100px) {
            right: 1%;
        }

        @media (max-width: 1000px) {
            top: -300px
        }
        @media (max-width: 700px) {
            left: 0;
            right: auto;
            min-width: 50%;
        }
        @media (max-width: 500px) {
            right: 0;
            min-width: 100%; 
        }
`
export const Item = styled.li`
    :not(:last-child) {
        margin-bottom: 20px;
    }
`
export const ItemText = styled.div`
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.38px;
    color: #6d6d6d;
    transition: color, 0.45s;
`
export const ItemLink = styled.a`
        position: relative;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 0.38px;
        color: #6d6d6d;
        transition: color, 0.45s;

        &::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: -5px;
            width: 25%;
            height: 1px;
            background-color:${props => props.theme.contact.beforeColor};
            opacity: 0.4;
            transition: all, 0.45s;
        }

        :hover::before {
            opacity: 1;
            width: 100%;
        }

        &:hover {
            color:${props => props.theme.contact.beforeColor};
        }
`
export const ItemTitle = styled.div`
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 6px;
    color: #7e7c7c;
    mix-blend-mode: normal;
    opacity: 0.6;
`
export const Fio = styled.div`
    font-family: "Artifika", serif;
    font-weight: 600;
    font-size: 80px;
    line-height: 97px;
    letter-spacing: 1.7px;
    color:${props => props.theme.fio};
    @media(max-width: 360px){
        font-size:60px;
    }
`

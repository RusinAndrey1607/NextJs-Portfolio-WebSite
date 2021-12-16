import styled from 'styled-components'


export  const Inner = styled.div`
  margin-bottom: 170px;
`
export const List = styled.ul`
display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 40px 60px;
        @media (max-width: 1240px) {
          grid-gap: 30px;

        }
        @media (max-width: 800px) {
          justify-content: center;
        grid-template-columns: 1fr;
        }

        @media (max-width: 444px){
        grid-gap: 28px;

        }
        @media (max-width: 370px) {
        grid-gap: 25px;
        }
`
export  const ItemTitle = styled.h5`
white-space: nowrap;
        font-weight: 600;
        font-size: 56px;
        line-height: 56px;
        opacity: 0.6;
        transition: all, 0.45s;
        @media (max-width: 900px) {
          font-size: 48px;
        line-height: 48px;
        }
        @media (max-width: 800px) {
          font-size: 54px;
        line-height: 54px;
        }
        @media (max-width: 555px) {
          font-size: 50px;
        line-height: 50px;
        }
        @media (max-width: 444px){
          font-size: 45px;
        line-height: 45px;
        }
        @media (max-width: 370px) {
          font-size: 42px;
        line-height: 42px;
        }
`
export const Item = styled.li`
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        padding: 60px 30px;
        
        background:${props => props.theme.skills.item};
        transition: all, 0.45s;
        &:hover {
            transform: scale(1.05);
            box-shadow: ${props => props.theme.skills.hover};
        }
        &:hover .skills__item_title {
            opacity: 1;
        }
        @media (max-width: 1240px) {
          padding: 60px 15px;

        }
        @media (max-width: 800px) {
          &:hover {
            transform: scale(1.01);
            box-shadow: ${props => props.theme.skills.hover};
        }
        &:hover .skills__item_title {
            transform: scale(1.05);
            opacity: 1;
        }
        }
        @media (max-width: 370px) {
          padding: 60px 10px;

        }
`
import styled, { ThemedStyledProps } from "styled-components";


// The Title element takes the mb parameter as props, short for margin-bottom
interface ITitle{
  mb ?: string
}

export const Title = styled.div<ITitle>`
  font-weight: bold;
  font-size: 80px;
  line-height: 120px;
  margin-bottom: ${(props) => props.mb || "20px"};

  @media (max-width: 700px) {
    font-size: 70px;
    line-height: 100px;
  }
  @media (max-width: 580px) {
    font-size: 60px;
    line-height: 100px;
  }
  @media (max-width: 380px) {
    font-size: 40px;
    line-height: 100px;
  }
`

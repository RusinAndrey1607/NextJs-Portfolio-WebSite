import React from 'react'
import { Title } from '../../styled/Title'
import { Inner, ItemTitle, Item, List } from './SkillsStyledComponents'

type SkillsPropsType = {
  skills : string[] | undefined
}
const Skills:React.FC<SkillsPropsType> = ({skills}) => {
  return (
    <section >
      <div className="container">
        <Inner>
          <Title mb='90px'>Skills</Title>
          <List>
            {skills?.map((item) => <Item key={item}><ItemTitle>{item}</ItemTitle></Item> )}
          </List>
        </Inner>
      </div>
    </section>
  )
}


export default Skills

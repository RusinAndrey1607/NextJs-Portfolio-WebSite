import React from 'react'
import styles from './About.module.scss'
import { Title } from './../../styled/Title'
import { AboutParagraph,Fio ,SmallAboutParagraph,ItemText, ItemLink, ItemTitle, Contact, Item} from './AboutStyledComponents'
import { Asset } from 'contentful'

type AboutPropsType = {
    aboutParagraphBig:string | undefined
    aboutParagraphMedium:string| undefined
    aboutParagraphSmall:string| undefined
    email:string| undefined
    developerName:string| undefined
    socialLinkName:string| undefined
    socialLink:string| undefined
    role:string| undefined
    aboutImage: Asset | undefined
    socialLinkDisplayedName: string| undefined
}
const About:React.FC<AboutPropsType> = ({developerName, socialLinkDisplayedName, socialLinkName, socialLink, aboutParagraphMedium, aboutImage, role, email, aboutParagraphBig,aboutParagraphSmall}) => {
    return (
        <div className={styles.about} id="about">
            <div className="container">
                <div className={styles.about__inner}>
                    <Title mb='35px'>About</Title>
                    <AboutParagraph>
                       {aboutParagraphMedium}
                    </AboutParagraph>

                    <img className={styles.about__img} src={aboutImage?.fields.file.url}/>
                    <div className={styles.about__box}>
                        <SmallAboutParagraph>
                           {aboutParagraphSmall}
                        </SmallAboutParagraph>
                        <Contact>
                            <ul className={styles.about__list}>
                                <Item>
                                    <ItemTitle className={styles.about__item_title}>EMAIL</ItemTitle>
                                    <ItemLink
                                        href={`mailto:${email}`}>
                                        {email}
                                    </ItemLink>
                                </Item>
                                <Item>
                                    <ItemTitle className={styles.about__item_title}>Role</ItemTitle>
                                    <ItemText>{role}</ItemText>
                                </Item>
                                <Item>
                                    <ItemTitle className={styles.about__item_title}>{socialLinkName}</ItemTitle>
                                    <ItemLink
                                        href={socialLink}
                                        target="_blank"
                                    >
                                        {socialLinkDisplayedName}
                                    </ItemLink>
                                </Item>
                            </ul>
                        </Contact>
                    </div>
                    <AboutParagraph>
                        {aboutParagraphBig}
                    </AboutParagraph>

                    <Fio>{developerName}</Fio>
                </div>
            </div>
        </div>
    )
}

export default About

import Link from 'next/link'
import React from 'react'
import { heroRef } from '../Header/Header'
import styles from './Hero.module.scss'
import { Button, ButtonLink, HeroLink, HeroParagraph, HeroWrap } from './HeroStyledComponents'

type HeroPropsType ={
    heroDescription:string | undefined
    telegramLink:string| undefined
    gitHubLink:string| undefined
    developerName:string| undefined
}

const Hero:React.FC<HeroPropsType> = ({heroDescription, telegramLink ,gitHubLink ,developerName,}) => {
    return (
        // @ts-ignore
        <div className={styles.hero__wrapper} ref={heroRef} id="home">
            <HeroWrap>
                <div className="container">
                    <div className={styles.hero__inner}>
                        <div className={styles.hero__box}>
                            <h1 className={styles.hero__title}>
                                Hello
                                <br />
                                I&apos;m {developerName}
                                <br />
                            </h1>
                            <div className={styles.hero__contact}>
                                <HeroParagraph>
                                    {heroDescription}
                                </HeroParagraph>
                                <div className={styles.hero__social}>
                                    <HeroLink target='_blank' rel='noreferrer' href={telegramLink}>Telegram</HeroLink>
                                    <HeroLink href={gitHubLink} target='_blank' rel='noreferrer' >GitHub</HeroLink>
                                </div>
                            </div>
                        </div>
                        <Button>
                            <Link href="/#projects">
                                <ButtonLink>
                                    See Portfolio
                                </ButtonLink>
                            </Link>
                        </Button>
                    </div>
                </div>
            </HeroWrap>
        </div>
    )
}


export default Hero

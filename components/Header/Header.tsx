import React, { useEffect, createRef, useRef, useState, useContext } from 'react'
import { Context } from '../../pages/_app'
import styles from './Header.module.scss'
import Link from 'next/link'
import { BurgerItem1, HeaderItem, BurgerItem2, BurgerItem3, BurgerItem4, HeaderNav, CusstomLink, StyledHeader, ThemeButton } from './HeaderStyledComponents'


export const heroRef = createRef()

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    const { ToggleTheme } = useContext(Context)

    const headerRef = useRef()

    const headerProjectFixed = () => {
        let scrollTop = window.scrollY;
        // @ts-ignore
        let heroEnd = heroRef.current?.clientHeight / 1.1;
        if (scrollTop >= heroEnd) {
            // @ts-ignore
            headerRef?.current?.classList.add("fixed");
        } else {
            // @ts-ignore
            headerRef?.current?.classList.remove("fixed");
        }
        if (window.scrollX === 0 && window.scrollY === 0) {
            // @ts-ignore
            headerRef?.current?.classList.remove("fixed");
        }

    };
    useEffect(() => {
        // @ts-ignore
        window.addEventListener("scroll", headerProjectFixed)
        return () => {
            window.removeEventListener('scroll', headerProjectFixed)
        }
    }, [])

    return (
        // @ts-ignore
        <StyledHeader ref={headerRef}>
            <div className="container">
                <div className={styles.header__inner}>
                    <div className={styles.header__settings}>
                        <ThemeButton onClick={ToggleTheme}></ThemeButton>
                    </div>
                    <HeaderNav active={isActive}>
                        <ul className={styles.header__list} >
                            <HeaderItem onClick={() => setIsActive(!isActive)} >
                            <Link href="/#home">
                                    <CusstomLink >Home</CusstomLink>

                                </Link>
                            </HeaderItem>
                            <HeaderItem onClick={() => setIsActive(!isActive)} >
                            <Link href="/#projects">
                                    <CusstomLink >Projects</CusstomLink>

                                </Link>
                            </HeaderItem>
                            <HeaderItem onClick={() => setIsActive(!isActive)} >
                                <Link href="/#about">
                                    <CusstomLink >About</CusstomLink>

                                </Link>
                            </HeaderItem>
                            <HeaderItem onClick={() => setIsActive(!isActive)} >
                                <Link href="#contact">
                                    <CusstomLink >Contact</CusstomLink>

                                </Link>
                            </HeaderItem>
                        </ul>
                    </HeaderNav>
                    <button onClick={() => setIsActive(!isActive)} className={`${styles.header__burger} ${isActive && styles.active}`}>
                        <BurgerItem1 active={isActive}></BurgerItem1>
                        <BurgerItem2 active={isActive}></BurgerItem2>
                        <BurgerItem3 active={isActive}> </BurgerItem3>
                        <BurgerItem4 active={isActive}></BurgerItem4>
                    </button>
                </div>
            </div>
        </StyledHeader>
    )
}

export default Header

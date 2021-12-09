import Link from 'next/link';
import styles from './../styles/header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <Link href="/">
                    <a className={styles.logo}>Logo</a>
                </Link>
                <ul className={styles.menu__list}>
                    <li className={styles.menu__list__item}>
                        <Link href="/">
                            <a className={styles.link}>Home</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
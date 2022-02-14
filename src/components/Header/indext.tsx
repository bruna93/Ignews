import { ActiveLink } from '../ActiveLink';

import { SighInButton } from '../SighInButton';
import styles from './styles.module.scss'

export function Header () {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="Logo ignews" />
                <nav>
                    <ActiveLink activeClassName={styles.active} href='/'>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href='/posts'>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SighInButton />
            </div>
        </header>
    );
}
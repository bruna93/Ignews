import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss'

export function SignInButton() {
    //variável que diz que o usuário está logado
    const { data: session } = useSession()

    // caso o usuário esteja logado (true), o botão mostrará o ícone verde
    return session ? (
        <button 
        type="button"
        className={styles.signInButton}
        onClick={() => signOut()}
        >
            <FaGithub color="#04d361"/>
            {session.user.name}
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : ( // caso não esteja logado (false), o botão mostrará o ícone amarelo
        <button 
        type="button"
        className={styles.signInButton}
        onClick={() => signIn('github')}
        >
            <FaGithub color="#eba417"/>
            Sign in with Github
        </button>
    );
}
import { useEffect, useState } from 'react';
import styles from './ConversationalPage.module.css'
import TypeWriter from '../../components/atoms/Text/Typewriter/Typewriter';
import LoginPage from '../LoginPage/LoginPage';

function ConversationalPage(){
    const [countdown, setCountdown] = useState<number | null>(null);
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        if (countdown === null) return;
        if (countdown === 0) {
            setShowLogin(true);
            return;
        }

        const timer = window.setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => window.clearTimeout(timer);
    }, [countdown]);

    if (showLogin) return <LoginPage />;

    return(
        <section className={styles.content}>
            <div className={styles.typewriter_content}>
                <TypeWriter strings={[
                    'Ainda não estou acreditando que você é a Jojo...',
                    'Vou ter que fazer 10 perguntas para ter certeza que você pode acessar o site super secreto que eu fiz para ela.',
                    'Você está preparada?'
                    ]} onComplete={() => setCountdown(5)} />
                {countdown !== null && (
                    <p className={styles.countdown} aria-live="polite">
                        {countdown}...
                    </p>
                )}
            </div>
        </section>
    ); 
}

export default ConversationalPage;
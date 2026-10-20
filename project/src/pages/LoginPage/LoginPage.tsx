import LoginContainer from "../../components/organisms/LoginContainer/LoginContainer";
import styles from "./LoginPage.module.css"

function LoginPage(){
    return(
        <section className={styles.content}>
            <LoginContainer />
        </section>
    );
}

export default LoginPage;
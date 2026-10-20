import styles from "./LoginContainer.module.css"

import Title from "../../atoms/Text/Title/Title";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Buttons/Default/Button";

function LoginContainer(){
    return(
        <div className={styles.content}>
            <Title color="green">Confirme que você é a Jojo</Title>

            <div className={styles.inputs}>
                <Input width={'98%'}>Insira o nome do seu cachorro</Input>
                <Input width={'98%'}>Insira o seu sobrenome mais difícil</Input>
            </div>

            <Button width={'100%'}>Entrar</Button>
        </div>
    );
}

export default LoginContainer;
import Button from "../components/atoms/Buttons/Default/Button";
import Title from "../components/atoms/Title/Title";
import Input from "../components/atoms/Input/Input";
import Text from "../components/atoms/Text/Text";
import QuizButton from "../components/atoms/Buttons/Quiz/QuizButton";

import TypeWriter from "../components/atoms/Typewriter/Typewriter";

function TestComponentsPage(){
    return(<div>
        <h1 color="black">Hello World</h1>
        <Title color="green" size="bigger">Esse é um exemplo de Título</Title>
        <Input width={'400px'}>Insira o nome bb</Input>
        <Button width={'200px'}> Olá mundo </Button>
        <Text>Teste de teste ne bb</Text>
        <TypeWriter strings={['oi', 'como ce tá?', 'eu quero saber a cor da sua calcinha']}/>
        <QuizButton width={'400px'} correct={true} >Teste ne bb</QuizButton>
    </div>);
}

export default TestComponentsPage;
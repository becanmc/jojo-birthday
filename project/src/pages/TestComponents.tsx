import Button from "../components/atoms/Buttons/Default/Button";
import Title from "../components/atoms/Text/Title/Title";
import Input from "../components/atoms/Input/Input";
import Text from "../components/atoms/Text/Default/Text";
import QuizButton from "../components/atoms/Buttons/Quiz/QuizButton";
import TypeWriter from "../components/atoms/Text/Typewriter/Typewriter";
import CameraFrame from "../components/atoms/CameraFrame/CameraFrame";
import LoginContainer from "../components/organisms/LoginContainer/LoginContainer";


function TestComponentsPage(){
    return(<div>
        <h1 color="black">Hello World</h1>
        <Title color="dark" size="small">Esse é um exemplo de Título</Title>
        <Input width={'400px'}>Insira o nome bb</Input>
        <Button width={'200px'}> Olá mundo </Button>
        <Text>Teste de teste ne bb</Text>
        <TypeWriter strings={['oi', 'como ce tá?', 'eu quero saber a cor da sua calcinha']}/>
        <QuizButton width={'400px'} correct={true} >Teste ne bb</QuizButton>
        <CameraFrame></CameraFrame>
        <LoginContainer/>
    </div>
    );
}
 
export default TestComponentsPage;
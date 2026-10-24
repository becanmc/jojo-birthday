import Button from "../components/atoms/Buttons/Default/Button";
import Title from "../components/atoms/Text/Title/Title";
import Input from "../components/atoms/Input/Input";
import Text from "../components/atoms/Text/Default/Text";
import QuizButton from "../components/atoms/Buttons/Quiz/QuizButton";
import TypeWriter from "../components/atoms/Text/Typewriter/Typewriter";
import CameraFrame from "../components/atoms/CameraFrame/CameraFrame";
import LoginContainer from "../components/organisms/LoginContainer/LoginContainer";
import InputWithLabel from "../components/molecules/InputWIthLabel/InputWithLabel";
import TriviaContainer from "../components/organisms/TriviaContainer/TriviaContainer";
import PeopleCard from "../components/molecules/Cards/PeopleCard/PeopleCard";

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
        <InputWithLabel 
            label="Qual o nome do sei cachorro?" 
            placeholder="Insira o nome aqui"
        />

        <TriviaContainer answers={[['haha', true], 
            ['bleble', false], 
            ['mira me', false]]}>A pergunta é tal</TriviaContainer>

        <PeopleCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0KHmu_shLxkxr5p_IZtPSu2XK_fJ-1p6E1XzBQQlM7d_1BNN3gCTZo3-mfzrhRRgSqJQlrPm-ObVGKpKgmENe5eI9rvPzQzNdiho8urA&s=10">
            Ariana Grand bb
        </PeopleCard>
    </div>
    );
}
 
export default TestComponentsPage;
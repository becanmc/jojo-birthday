import Button from "../components/atoms/Buttons/Button";
import Title from "../components/atoms/Title/Title";
import Input from "../components/atoms/Input/Input";
import Text from "../components/atoms/Text/Text";

function TestComponentsPage(){
    return(<div>
        <h1 color="black">Hello World</h1>
        <Title color="green" size="bigger">Esse é um exemplo de Título</Title>
        <Input width={'400px'}>Insira o nome bb</Input>
        <Button width={'200px'}> Olá mundo </Button>
        <Text>Teste de teste ne bb</Text>
    </div>);
}

export default TestComponentsPage;
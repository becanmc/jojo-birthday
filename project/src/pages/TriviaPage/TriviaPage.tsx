import { useState } from "react";
import quizData from "../../../data/quiz.json";
import styles from "./TriviaPage.module.css"
import TriviaContainer from "../../components/organisms/TriviaContainer/TriviaContainer";
import Title from "../../components/atoms/Text/Title/Title";

type QuizQuestion = {
    id: number;
    category: string;
    question: string;
    options: [string, boolean][];
};

const questions = quizData as QuizQuestion[];

function TriviaPage(){
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const currentQuestion = questions[currentQuestionIndex];

    function handleAnswer(correct: boolean) {
        if (correct) 
            setScore((currentScore) => currentScore + 1);

        setCurrentQuestionIndex((index) => index + 1);
    }

    return (
        <section className={styles.content}>
            {currentQuestion ? (
                <>
                    <TriviaContainer
                        key={currentQuestion.id}
                        answers={currentQuestion.options}
                        onAnswer={handleAnswer}
                    >
                        {currentQuestion.question}
                    </TriviaContainer>
                    <p className={styles.progress}>
                        Pergunta {currentQuestionIndex + 1} / {questions.length}
                    </p>
                </>
            ) : (
                <div className={styles.result}>
                    <Title size="small">Quiz concluído!</Title>
                    <p>Você acertou {score} de {questions.length} perguntas.</p>
                </div>
            )}
        </section>
    );
}

export default TriviaPage;
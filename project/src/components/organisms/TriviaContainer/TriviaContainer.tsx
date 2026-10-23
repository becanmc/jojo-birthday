import { useState } from 'react';
import styles from './Trivia.module.css'
import Title from '../../atoms/Text/Title/Title';
import QuizButton from '../../atoms/Buttons/Quiz/QuizButton';
import type React from 'react';

type TriviaQuestionProps = {
    children: React.ReactNode;
    answers: Array<[string, boolean]>;
    onAnswer?: (correct: boolean) => void;
}

function TriviaContainer({children, answers, onAnswer} : TriviaQuestionProps){
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);

    function handleAnswer(index: number, correct: boolean) {
        if (selectedAnswerIndex !== null) return;

        setSelectedAnswerIndex(index);
        window.setTimeout(() => onAnswer?.(correct), 700);
    }

    return(
        <div className={styles.content}>
            {/* Pergunta */}
            <Title size='small'>{children}</Title>

            {/* Respostas enviadas */}
            <div className={styles.answers}>
                {answers.map(([answer, correct], index) => (
                    <QuizButton
                        width={'100%'}
                        key={index}
                        correct={correct}
                        feedback={selectedAnswerIndex === index ? (correct ? 'green' : 'red') : undefined}
                        disabled={selectedAnswerIndex !== null}
                        onClick={() => handleAnswer(index, correct)}
                    >
                        {answer}
                    </QuizButton>
                ))}
            </div>
            
            
        </div>
    );
}

export default TriviaContainer;
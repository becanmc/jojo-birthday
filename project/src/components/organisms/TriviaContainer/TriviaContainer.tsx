import styles from './Trivia.module.css'
import Title from '../../atoms/Text/Title/Title';
import QuizButton from '../../atoms/Buttons/Quiz/QuizButton';
import type React from 'react';

type TriviaQuestionProps = {
    children: React.ReactNode;
    answers: Array<[string, boolean]>;
}

function TriviaContainer({children, answers} : TriviaQuestionProps){
    return(
        <div className={styles.content}>
            {/* Pergunta */}
            <Title size='small'>{children}</Title>

            {/* Respostas enviadas */}
            <div className={styles.answers}>
                {answers.map(([answer, correct], index) => (
                    <QuizButton width={'100%'} key={index} correct={correct}>
                        {answer}
                    </QuizButton>
                ))}
            </div>
            
            
        </div>
    );
}

export default TriviaContainer;
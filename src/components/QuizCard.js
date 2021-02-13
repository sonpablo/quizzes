import Button from 'components/Button'
import QuestionCard from 'components/QuestionCard'
import useQuiz from 'hooks/useQuiz'
import React, { useState } from 'react'
import './QuizCard.css'

export default function QuizCard({ category, difficult }) {

    const { feedback } = useQuiz({ category: category, difficult: difficult })
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [points, setPoints] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const question = feedback.quiz[currentQuestion]

    if (feedback.loading) return <span>Loading...</span>

    if (feedback.hasError) return <span>{feedback.message}</span>

    if (showResult) return <span>You earned {points} points.</span>

    const onAnswer = (text) => {
        checkAnswer(text)
        setNextStep()
    }

    const checkAnswer = (answers) => {

        if (question.correct_answer === answers) {
            switch (question.type) {
                case 'boolean':
                    setPoints(currentValue => currentValue + 5)
                    break;
                case 'multiple':
                    setPoints(currentValue => currentValue + 10)
                    break;
                default:
                    break;
            }
        }
    }

    const setNextStep = () => {
        currentQuestion + 1 === feedback.quiz.length
            ? setShowResult(true)
            : setCurrentQuestion(currentValue => currentValue + 1)
    }



    const renderAnswers = () => {
        const answers = [...question.incorrect_answers, question.correct_answer]
            .sort((a, b) => a.localeCompare(b))

        return answers.map(answer => {
            return <Button key={answer} onClick={() => onAnswer(answer)} text={answer} />
        })
    }

    return (
        <main className="main-container" >
            <QuestionCard
                footer={`${question.category} - ${question.difficulty}`}
                header={`${currentQuestion + 1} - ${feedback.quiz.length}`}
                question={question.question} />

            <nav className="answers">
                {renderAnswers()}
            </nav>
        </main>
    )

}
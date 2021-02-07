
import ButtonStart from 'components/ButtonStart'
import CategoryOptions from 'components/CategoryOptions'
import DifficultOptions from 'components/DifficultOptions'
import QuizCard from 'components/QuizCard'
import React, { useState } from 'react'

export default function Home() {


    const [category, setCategory] = useState(null)
    const [difficult, setDifficult] = useState(null)
    const [showQuiz, setShowQuiz] = useState(false)

    const onStart = () => {
        category && difficult && setShowQuiz(true)

    }

    const onSelectDifficult = (value) => {
        setDifficult(value)
    }

    const onSelectCategory = (value) => {
        setCategory(value)
    }

    const renderSetup = () => {
        return <>
            <h1>Setup your challenge</h1>
            <DifficultOptions onSelect={onSelectDifficult} />
            <CategoryOptions onSelect={onSelectCategory} />
            <div style={{ width: '250px' }}>
                <ButtonStart onClick={onStart} text={'Start ►'} />
            </div>
        </>
    }

    const renderQuiz = () => {
        return <QuizCard />
    }

    return (
        <>
            {!showQuiz ? renderQuiz() : renderSetup()}
        </>
    )
}
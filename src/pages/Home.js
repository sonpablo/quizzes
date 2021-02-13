
import ButtonStart from 'components/ButtonStart'
import QuizCard from 'components/QuizCard'
import SetUpChallenge from 'components/SetUpChallenge'
import React, { useState } from 'react'

export default function Home() {

    const [category, setCategory] = useState(null)
    const [difficult, setDifficult] = useState(null)
    const [showQuiz, setShowQuiz] = useState(false)

    const onStart = () => {
        setShowQuiz(true)
    }

    const onSelectDifficult = (value) => {
        setDifficult(value)
    }

    const onSelectCategory = (value) => {
        setCategory(value)
    }

    const renderQuiz = () => {
        return <QuizCard category={category} difficult={difficult} />
    }

    const renderSetupChallenge = () => {
        return <>
            <SetUpChallenge onChangeCategory={onSelectCategory} onChangeDifficult={onSelectDifficult} />
            {renderStart()}
        </>
    }

    const renderStart = () => {
        return category && difficult && <div style={{ marginTop: '2em', width: '250px' }}>
            <ButtonStart onClick={onStart} text={'Start ►'} />
        </div>
    }

    return (
        <>
            {showQuiz
                ? renderQuiz()
                : renderSetupChallenge()
            }
        </>
    )
}
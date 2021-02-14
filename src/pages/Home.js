
import Button from 'components/Button'
import QuizCard from 'components/QuizCard'
import SetUpChallenge from 'components/SetUpChallenge'
import React, { useState } from 'react'
import { BUTTON_COLOR } from '../constants'

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
            <br />
            {renderStart()}
        </>
    }

    const renderStart = () => {
        return category && difficult &&
            <Button color={BUTTON_COLOR.RED} onClick={onStart} text={'Start ►'} />

    }

    return (
        <div>
            {showQuiz
                ? renderQuiz()
                : renderSetupChallenge()
            }
        </div>
    )
}
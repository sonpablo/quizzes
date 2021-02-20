
import Button from 'components/Button'
import QuizCard from 'components/QuizCard'
import SetUpChallenge from 'components/SetUpChallenge'
import useGame from 'hooks/useGame'
import React, { useEffect, useState } from 'react'
import { BUTTON_COLOR } from '../constants'

export default function Home() {

    const [start, setStart] = useState(false)
    const { game } = useGame()

    useEffect(() => {
        setStart(!game.configured && game.configured)
    }, [game])

    const onStart = () => {
        setStart(true)
    }

    const renderQuiz = () => {
        return <QuizCard category={game.category} difficult={game.difficulty} />
    }

    const renderSetupChallenge = () => {
        return <>
            <SetUpChallenge />
            <br />
            {renderStart()}
        </>
    }

    const renderStart = () => {
        return game.configured &&
            <Button color={BUTTON_COLOR.RED} onClick={onStart} text={'Start ►'} />
    }

    return (
        <div>
            {start
                ? renderQuiz()
                : renderSetupChallenge()
            }
        </div>
    )
}
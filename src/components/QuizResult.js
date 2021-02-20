import Button from 'components/Button'
import useGame from 'hooks/useGame'
import './QuizResult.css'

export default function QuizResult({ points = 0 }) {

    const { dispatch } = useGame()

    const onClick = () => {
        dispatch({ type: 'INIT' })
    }

    return (
        <div className='quiz-result-container'>
            <h3>You've earned {points}</h3>
            <Button onClick={onClick} text={'Try again'}></Button>
        </div>
    )
}
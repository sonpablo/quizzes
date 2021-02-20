import Radio from 'components/Radio'
import useGame from 'hooks/useGame'
import React from 'react'
import './DifficultyOptions.css'

const DIFFICUlTLY = [
    "hard",
    "medium"
]

export default function DifficultyOptions() {

    const { dispatch } = useGame()

    const onChange = (value) => {
        dispatch({
            type: 'DIFFICULTY',
            difficulty: value
        })
    }

    const renderDifficulties = () => {

        return DIFFICUlTLY.map(item =>
            < div key={item}>
                <Radio
                    id={item}
                    name={'difficult'}
                    onSelect={onChange}
                    value={item} />
            </div >
        )
    }

    return (
        <div className='difficulties-container'>
            <h3>Difficulty</h3>
            <section>
                {renderDifficulties()}
            </section>
        </div>
    )
}
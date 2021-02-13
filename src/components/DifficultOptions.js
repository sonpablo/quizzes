import Radio from 'components/Radio'
import React from 'react'
import './DifficultOptions.css'

const DIFFICUlTLY = [
    "hard",
    "medium"
]

export default function DifficultOptions({ onSelect }) {

    const onChange = (value) => {
        onSelect(value)
    }

    const renderDifficulties = () => {
        return DIFFICUlTLY.map(item =>
            <Radio className="do-items" key={item} id={item} name={'difficult'} onSelect={onChange} value={item} />
        )
    }

    return (
        <div className='difficulties-container'>
            <h3>Difficult</h3>
            <section>
                {renderDifficulties()}
            </section>
        </div>
    )
}
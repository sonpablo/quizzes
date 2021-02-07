import React from 'react'
import './Radio.css'

export default function Radio({ id = 'any', name = 'name', onSelect, value = 'any' }) {


    const onClick = () => {
        onSelect(id)
    }

    return (
        <div className='radio-container'>
            <input id={id} name={name} onClick={onClick} type='radio' />
            <label htmlFor={id}>{value}</label>
        </div>
    )
}
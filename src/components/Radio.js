import React from 'react'
import './Radio.css'

export default function Radio({ id = 'any', name = 'name', value = 'any' }) {

    return (
        <div className='radio-container'>
            <input type='radio' id={id} name={name} />
            <label htmlFor={id}>{value}</label>
        </div>

    )
}
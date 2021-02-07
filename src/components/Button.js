import React from 'react'
import './Button.css'

export default function Button({ onClick, text }) {

    return (
        <button className="button-container" onClick={onClick}>{text}</button>
    )
}
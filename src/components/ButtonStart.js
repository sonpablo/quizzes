import React from 'react'
import './ButtonStart.css'

export default function ButtonStart({ onClick, text }) {

    return (
        <button className="buttonStart-container" onClick={onClick}>{text}</button>
    )
}
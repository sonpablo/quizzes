import React from 'react'
import { BUTTON_COLOR, COLORS } from '../constants'
import './Button.css'

export default function Button({ color, onClick, text }) {

    const getStyle = () => {

        switch (color) {
            case BUTTON_COLOR.ORANGE:
                return {
                    '--mainColor': COLORS.ORANGE,
                    '--alternativeColor': COLORS.RED,
                }
            case BUTTON_COLOR.RED:
                return {
                    '--mainColor': COLORS.RED,
                    '--alternativeColor': COLORS.RED,
                }

            default:
                return {
                    '--mainColor': COLORS.ORANGE,
                    '--alternativeColor': COLORS.RED,
                }
        }
    }

    return (
        <button className="button-container"
            onClick={onClick}
            style={getStyle()}
        >{text}</button>
    )
}
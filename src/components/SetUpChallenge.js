
import CategoryOptions from 'components/CategoryOptions'
import DifficultyOptions from 'components/DifficultyOptions'
import React from 'react'

export default function SetUpChallenge() {

    return (
        <>
            <h2>Setup your challenge</h2>
            <DifficultyOptions />
            <CategoryOptions />
        </>
    )
}
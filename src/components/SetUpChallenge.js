
import CategoryOptions from 'components/CategoryOptions'
import DifficultOptions from 'components/DifficultOptions'
import React from 'react'

export default function SetUpChallenge({ onChangeCategory, onChangeDifficult }) {

    const onSelectDifficult = (value) => {
        onChangeDifficult(value)
    }

    const onSelectCategory = (value) => {
        onChangeCategory(value)
    }

    return (
        <>
            <h2>Setup your challenge</h2>
            <DifficultOptions onSelect={onSelectDifficult} />
            <CategoryOptions onSelect={onSelectCategory} />
        </>
    )
}
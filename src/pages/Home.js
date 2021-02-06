
import CategoryOptions from 'components/CategoryOptions'
import DifficultOptions from 'components/DifficultOptions'
import React from 'react'

export default function Home() {

    return (
        <>
            <h1>Setup your challenge</h1>
            <DifficultOptions />
            <CategoryOptions />
        </>
    )
}
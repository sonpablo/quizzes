import Radio from 'components/Radio'
import React from 'react'
import './CategoryOptions.css'

const CATEGORIES = [
    { id: 18, name: "Computers" },
    { id: 30, name: "Gadgets" },
    { id: 12, name: "Music" },
]

export default function CategoryOptions() {

    const renderCategories = () => {
        return CATEGORIES.map(category =>
            <Radio key={category.id} id={category.id} name={'category'} value={category.name} />
        )
    }

    return (
        <div className='categories-container'>
            { renderCategories()}
        </div>
    )
}
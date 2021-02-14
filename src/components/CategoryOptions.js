import Radio from 'components/Radio'
import React from 'react'
import './CategoryOptions.css'

const CATEGORIES = [
    { id: 18, name: "Computers" },
    { id: 30, name: "Gadgets" },
    { id: 12, name: "Music" },
]

export default function CategoryOptions({ onSelect }) {

    const onChange = (value) => {
        onSelect(value)
    }

    const renderCategories = () => {
        return CATEGORIES.map(category =>
            <div>
                <Radio key={category.id}
                    id={category.id}
                    name={'category'}
                    onSelect={onChange}
                    value={category.name} />
            </div>
        )
    }

    return (
        <div className='categories-container'>
            <h3>Categories</h3>
            <section>
                {renderCategories()}
            </section>
        </div>
    )
}
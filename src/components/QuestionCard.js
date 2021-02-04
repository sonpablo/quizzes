import React from 'react'
import './QuestionCard.css'
export default function QuestionCard({ footer, header, question }) {

    return (
        <div className='question-card-container' >
            <header>{header}</header>
            <section>
                {question}
            </section>
            <footer>{footer}</footer>
        </div>
    )
}
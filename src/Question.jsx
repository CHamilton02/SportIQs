import React from 'react'
import {decode} from 'html-entities'

export default function Question(props) {
    return (
        <div className="question-container">
            <h3>{decode(props.question.question)}</h3>
            <div className="button-container">
                <button>{props.options[0]}</button>
                <button>{props.options[1]}</button>
                <button>{props.options[2]}</button>
                <button>{props.options[3]}</button>
            </div>
        </div> 
    )
}
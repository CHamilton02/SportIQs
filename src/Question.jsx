import React from 'react'
import {decode} from 'html-entities'

export default function Question(props) {
    return (
        <div className="question-container">
            <h3 className="question">
                {decode(props.question.question)}
            </h3>
            {
                props.gameFinished ?
                <div className="button-container">
                    <button
                        className={props.selectedElement === 0 ? 0 === props.correctLocation ? "correct-answer" : "wrong-answer inactive" : "unselected-button inactive"}
                    >
                        {props.options[0]}
                    </button>
                    <button
                        className={props.selectedElement === 1 ? 1 === props.correctLocation ? "correct-answer" : "wrong-answer inactive" : "unselected-button inactive"}
                    >
                        {props.options[1]}
                    </button>
                    <button
                        className={props.selectedElement === 2 ? 2 === props.correctLocation ? "correct-answer" : "wrong-answer inactie" : "unselected-button inactive"}
                    >
                        {props.options[2]}
                    </button>
                    <button
                        className={props.selectedElement === 3 ? 3 === props.correctLocation ? "correct-answer" : "wrong-answer inactive" : "unselected-button inactive"}
                    >
                        {props.options[3]}
                    </button>
                </div>
                :
                <div className="button-container">
                    <button
                        className={props.selectedElement === 0 ? "selected-button" : "unselected-button active"}
                        onClick={() => props.handleToggle(props.questionNum, 0)}
                    >
                        {props.options[0]}
                    </button>
                    <button
                        className={props.selectedElement === 1 ? "selected-button" : "unselected-button active"}
                        onClick={() => props.handleToggle(props.questionNum, 1)}
                    >
                        {props.options[1]}
                    </button>
                    <button
                        className={props.selectedElement === 2 ? "selected-button" : "unselected-button active"}
                        onClick={() => props.handleToggle(props.questionNum, 2)}
                    >
                        {props.options[2]}
                    </button>
                    <button
                        className={props.selectedElement === 3 ? "selected-button" : "unselected-button active"}
                        onClick={() => props.handleToggle(props.questionNum, 3)}
                    >
                        {props.options[3]}
                    </button>
                </div>
            }
            
            <hr className="question-splitter"/>
        </div> 
    )
}
import React from 'react'
import {decode} from 'html-entities'
import {isMobile} from 'react-device-detect'

export default function Question(props) {
    return (
        isMobile ?
        <div> 
            <h3 className="question-phone">
                {decode(props.question.question)}
            </h3>
            {
                props.gameFinished ?
                <div className="button-container-phone">
                    <button
                        className={props.selectedElement === 0 ?
                            0 === props.correctLocation ?
                                "option-button-phone correct-answer"
                                :
                                "option-button-phone wrong-answer inactive"
                            :
                            0 === props.correctLocation ? "option-button-phone correct-answer inactive"
                                :
                                "option-button-phone unselected-button inactive"
                        }
                    >
                        {decode(props.options[0])}
                    </button>
                    <button
                        className={props.selectedElement === 1 ?
                            1 === props.correctLocation ?
                                "option-button-phone correct-answer"
                                :
                                "option-button-phone wrong-answer inactive"
                            : 1 === props.correctLocation ?
                                "option-button-phone correct-answer inactive"
                                :
                                "option-button-phone unselected-button inactive"
                        }
                    >
                        {decode(props.options[1])}
                    </button>
                    <button
                        className={props.selectedElement === 2 ?
                            2 === props.correctLocation ?
                                "option-button-phone correct-answer"
                                :
                                "option-button-phone wrong-answer inactive"
                            :
                            2 === props.correctLocation ?
                                "option-button-phone correct-answer inactive"
                                :
                                "option-button-phone unselected-button inactive"
                        }
                    >
                        {decode(props.options[2])}
                    </button>
                    <button
                        className={props.selectedElement === 3 ?
                            3 === props.correctLocation ?
                                "option-button-phone correct-answer"
                                :
                                "option-button-phone wrong-answer inactive"
                            :
                            3 === props.correctLocation ?
                                "option-button-phone correct-answer inactive"
                                :
                                "option-button-phone unselected-button inactive"
                        }
                    >
                        {decode(props.options[3])}
                    </button>
                </div>
                :
                <div className="button-container">
                    <button
                        className={props.selectedElement === 0 ? " option-button-phone selected-button" : "option-button-phone unselected-button active"}
                        onClick={() => props.handleToggle(props.questionNum, 0)}
                    >
                        {decode(props.options[0])}
                    </button>
                    <button
                        className={props.selectedElement === 1 ? "option-button-phone selected-button" : "option-button-phone unselected-button active"}
                        onClick={() => props.handleToggle(props.questionNum, 1)}
                    >
                        {decode(props.options[1])}
                    </button>
                    <button
                        className={props.selectedElement === 2 ? "option-button-phone selected-button" : "option-button-phone unselected-button active"}
                        onClick={() => props.handleToggle(props.questionNum, 2)}
                    >
                        {decode(props.options[2])}
                    </button>
                    <button
                        className={props.selectedElement === 3 ? "option-button-phone selected-button" : "option-button-phone unselected-button active"}
                        onClick={() => props.handleToggle(props.questionNum, 3)}
                    >
                        {decode(props.options[3])}
                    </button>
                </div>
            }
            
                <hr className="question-splitter"/>
        </div>
        :
        <div>
            <h3 className="question">
                {decode(props.question.question)}
            </h3>
            {
                props.gameFinished ?
                <div className="button-container">
                    <button
                        className={props.selectedElement === 0 ?
                            0 === props.correctLocation ?
                                "option-button correct-answer"
                                :
                                "option-button wrong-answer inactive"
                            :
                            0 === props.correctLocation ? "option-button correct-answer inactive"
                                :
                                "option-button unselected-button inactive"
                        }
                    >
                        {decode(props.options[0])}
                    </button>
                    <button
                        className={props.selectedElement === 1 ?
                            1 === props.correctLocation ?
                                "option-button correct-answer"
                                :
                                "option-button wrong-answer inactive"
                            : 1 === props.correctLocation ?
                                "option-button correct-answer inactive"
                                :
                                "option-button unselected-button inactive"
                        }
                    >
                        {decode(props.options[1])}
                    </button>
                    <button
                        className={props.selectedElement === 2 ?
                            2 === props.correctLocation ?
                                "option-button correct-answer"
                                :
                                "option-button wrong-answer inactive"
                            :
                            2 === props.correctLocation ?
                                "option-button correct-answer inactive"
                                :
                                "option-button unselected-button inactive"
                        }
                    >
                        {decode(props.options[2])}
                    </button>
                    <button
                        className={props.selectedElement === 3 ?
                            3 === props.correctLocation ?
                                "option-button correct-answer"
                                :
                                "option-button wrong-answer inactive"
                            :
                            3 === props.correctLocation ?
                                "option-button correct-answer inactive"
                                :
                                "option-button unselected-button inactive"
                        }
                    >
                        {decode(props.options[3])}
                    </button>
                </div>
                :
                <div className="button-container">
                    <button
                        className={props.selectedElement === 0 ? " option-button selected-button" : "option-button unselected-button active"}
                        onClick={() => props.handleToggle(props.questionNum, 0)}
                    >
                        {decode(props.options[0])}
                    </button>
                    <button
                        className={props.selectedElement === 1 ? "option-button selected-button" : "option-button unselected-button active"}
                        onClick={() => props.handleToggle(props.questionNum, 1)}
                    >
                        {decode(props.options[1])}
                    </button>
                    <button
                        className={props.selectedElement === 2 ? "option-button selected-button" : "option-button unselected-button active"}
                        onClick={() => props.handleToggle(props.questionNum, 2)}
                    >
                        {decode(props.options[2])}
                    </button>
                    <button
                        className={props.selectedElement === 3 ? "option-button selected-button" : "option-button unselected-button active"}
                        onClick={() => props.handleToggle(props.questionNum, 3)}
                    >
                        {decode(props.options[3])}
                    </button>
                </div>
            }
            
            <hr className="question-splitter"/>
        </div>
    )
}
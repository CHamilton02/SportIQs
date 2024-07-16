import React from "react"
import Question from './Question'
import {isMobile} from 'react-device-detect'
import moonEmoji from './assets/moon-emoji.png'
import sunEmoji from './assets/sun-emoji.png'

function placeCorrect(incorrectArray, correctAnswer) {
    let location = Math.floor(Math.random() * 4)
    let index = 0
    const optionsArray = []
  
    // While there remain elements to shuffle...
    while (index < 4) {
        optionsArray.push(location === index ? correctAnswer : incorrectArray.shift())
        index++
    }

    return [optionsArray, location]
}

export default function App() {
    const [gameCounter, setgameCounter] = React.useState(0)
    const [questions, setQuestions] = React.useState([])
    const [options, setOptions] = React.useState([])
    const [correctLocation, setCorrectLocation] = React.useState([])
    const [selectedElement, setSelectedElement] = React.useState([-1, -1, -1, -1, -1])
    const [finished, setFinished] = React.useState(false)
    const [darkMode, setDarkMode] = React.useState(localStorage.getItem('darkMode') === null ? localStorage.false : JSON.parse(localStorage.getItem('darkMode')))

    React.useEffect(() => {
        if (gameCounter) {
            fetch("https://opentdb.com/api.php?amount=5&category=21&type=multiple")
                .then(res => res.json())
                .then(data => setQuestions(data.results))
        }
    }, [gameCounter])

    React.useEffect(() => {
        if (questions) {
            let optionsArray = [], answerLocation = []
            questions.map(element => {
                const result = placeCorrect(element.incorrect_answers, element.correct_answer)
                optionsArray.push(result[0])
                answerLocation.push(result[1])
            })
            setOptions(optionsArray)
            setCorrectLocation(answerLocation)
        }
        
    }, [questions])

    function toggleDarkMode() {
        setDarkMode(prevMode => {
            localStorage.setItem('darkMode', JSON.stringify(!prevMode))
            return !prevMode
        })
    }

    function updateSelectedElement(questionNum, optionNum) {
        setSelectedElement(prevElem => {
            const newArray = [...prevElem]
            newArray[questionNum] = optionNum
            return newArray
        })
    }

    function checkAnswers() {
        let correctAnswers = 0

        for (let i = 0; i < 5; i++) {
            correctAnswers += correctLocation[i] === selectedElement[i] ? 1 : 0
        }

        return correctAnswers
    }

    function getPercentCorrect() {
        const correctAnswers = checkAnswers()

        return ((correctAnswers / 5) * 100).toFixed(2)
    }

    function playAgain() {
        setgameCounter(prevValue => prevValue + 1)
        setFinished(false)
        setSelectedElement([-1, -1, -1, -1, -1])
    }

    const questionElements = options.map((element, index) => <Question
        question={questions[index]}
        options={options[index]}
        correctLocation={correctLocation[index]}
        key={index}
        questionNum={index}
        selectedElement={selectedElement[index]}
        handleToggle={updateSelectedElement}
        gameFinished={finished}
    />)

    return (
        <main className={`${questions.length > 0 ? isMobile ? "main-phone" : "" : ""} ${darkMode ? "dark-mode" : ""}`}>
            <button className="toggle-button" onClick={toggleDarkMode}>
                <img src={darkMode ? sunEmoji : moonEmoji} className="dark-mode-image"/>
            </button>
            {
                questions.length > 0 ?
                <div>
                    {questionElements}
                    {
                        isMobile ?
                            finished ? 
                            <div className="finished-game-container">
                                <h2 className="endgame-message-phone">{`Game ${gameCounter}: You scored ${checkAnswers()}/5 correct answers`}</h2>
                                <button className="play-again-button-phone" onClick={playAgain}>
                                    Play again
                                </button>
                            </div>
                            :
                            <button className="check-button-phone" onClick={() => setFinished(true)}>
                                Check Answers
                            </button>
                        :
                            finished ? 
                            <div className="finished-game-container">
                                <h2 className="endgame-message">{`Game ${gameCounter}: You scored ${checkAnswers()}/5 [${getPercentCorrect()}%] correct answers`}</h2>
                                <button className="play-again-button" onClick={playAgain}>
                                    Play again
                                </button>
                            </div>
                            :
                            <button className="check-button" onClick={() => setFinished(true)}>
                                Check Answers
                            </button>
                    }
                </div>
                :
                isMobile ?
                <div>
                    <h1 className="main-title-phone">SportIQs</h1>
                    <h2 className="main-desc-phone">A sports trivia game!</h2>
                    <button className="main-button-phone" onClick={() => setgameCounter(1)}>Start Quiz</button>
                </div>  
                :
                <div>
                    <h1 className="main-title">SportIQs</h1>
                    <h2 className="main-desc">A sports trivia game!</h2>
                    <button className="main-button" onClick={() => setgameCounter(1)}>Start Quiz</button>   
                </div>
            }
        </main>    
    )
}
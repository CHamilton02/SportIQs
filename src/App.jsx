import React from "react"
import Question from './Question'

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
    const [playGame, setPlayGame] = React.useState(false)
    const [questions, setQuestions] = React.useState([])
    const [options, setOptions] = React.useState([])
    const [correctLocation, setCorrectLocation] = React.useState([])
    const [selectedElement, setSelectedElement] = React.useState([-1, -1, -1, -1, -1])

    React.useEffect(() => {
        if (playGame) {
            fetch("https://opentdb.com/api.php?amount=5&category=21&type=multiple")
                .then(res => res.json())
                .then(data => setQuestions(data.results))
        }
    }, [playGame])

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

        console.log(`${correctAnswers} correct answers`)
    }

    const questionElements = options.map((element, index) => <Question
        question={questions[index]}
        options={options[index]}
        correctLocation={correctLocation[index]}
        key={index}
        questionNum={index}
        selectedElement={selectedElement[index]}
        handleToggle={updateSelectedElement}
    />)

    return (
        <main>
            {
                questions.length > 0 ?
                <div>
                    {questionElements}
                    <button className="check-button" onClick={checkAnswers}>
                        Check Answers
                    </button>
                </div>
                :
                <div>
                    <h1 className="main-title">SportIQs</h1>
                    <h2 className="main-desc">A sports trivia game!</h2>
                    <button className="main-button" onClick={() => setPlayGame(true)}>Start Quiz</button>   
                </div>     
            }
        </main>    
    )
}
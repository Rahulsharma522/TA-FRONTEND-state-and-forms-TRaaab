import React from "react";

import questions from '../data'

class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            answer: "",
        }
    }
    answer = (q, i) => {
        this.setState({
            answer: this.state.answer === i ? "" : i,
        })
        console.log(this.state.answer)
    }

    render() {
        return (
            <>
                {
                    questions.map((q, i) => {
                        return (
                            <>
                                <div className="question">
                                    <div  onClick={() => { this.answer(q, i) }}
                                        className={i === this.state.answer ? "green " : ""}
                                    >{q.Q}</div>
                                </div>
                                <p className="answer">{i === this.state.answer ? <p>{q.A}</p> : ""}</p>
                            </>
                        )
                    })
                }
            </>

        )
    }
}

export default Question
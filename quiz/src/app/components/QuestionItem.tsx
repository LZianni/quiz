import { useState } from "react"
import { Questions } from "../types/Questions"

type Props = {
    question: Questions
    count: number
    onAnswer: (answer: number) => void
}

export const QuestionItem = ({ question, count, onAnswer }: Props) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

    const checkQuestion = (key: number) => {
        if (selectedAnswer === null) {
            setSelectedAnswer(key)
            setTimeout(() => {
                onAnswer(key)
                setSelectedAnswer(null)
            }, 1000)
        }
    }

    return (
        <div>
            <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>
            <div>
                {question.options.map((item, key) => (
                    <div
                        key={key}
                        onClick={() => checkQuestion(key)}
                        className={`border px-3 py-2 rounded-md text-lg mb-4 bg-blue-100 border-blue-300
                            ${selectedAnswer !== null ? 'cursor-auto' : 'hover:opacity-60 cursor-pointer'}
                            ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-100 border-green-300'}
                            ${selectedAnswer !== null && selectedAnswer != question.answer && selectedAnswer === key && 'bg-red-100 border-red-300'}
                        `}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}
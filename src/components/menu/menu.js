import { useCallback, useState } from 'react'
import './menu.css'

export const Menu = ({ onStart }) => {
    const [numberText, setNumberText] = useState(4)
    const [nameText, setNameText] = useState('')
    const [isNumberError, setNumberError] = useState(false)
    const [isNameError, setNameError] = useState(false)

    const handleClickStart = useCallback(() => {
        const number = +numberText
        const numberValid = number % 2 === 0 && number != 0
        const nameValid = !!nameText
        if (numberValid && nameValid) {
            onStart(number)
        } else {
            setNumberError(!numberValid)
            setNameError(!nameValid)
        }
    })

    const handleChangeNumber = useCallback((event) => {
        const value = event.target.value
        setNumberText(value)
    })


    const handleChangeName = useCallback((event) => {
        const value = event.target.value
        setNameText(value)
    })

    return <div className='menu'>
        <div className='input-row'>
            Введите фамилию:
            <input className='input' onChange={handleChangeName} value={nameText} er></input>
        </div>

        <div className='input-row'>
            Введите чётное число:
            <input className='input' type='number' onChange={handleChangeNumber} value={numberText}></input>
        </div>
        <button onClick={handleClickStart}>Start</button>
        <div className='error-block'></div>
        {isNumberError && 'Ошибка! Введенное число, должно быть чётным '}
        {isNameError && 'Фамилия не введена'}

    </div>
} 
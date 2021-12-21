import './board.css'
import { Card } from '../card/card';
import { useCallback, useEffect, useRef, useState } from 'react';

const delay = 3000 // 3sec
// matrixElement= { id: index, value: element }

export function Board({ matrix }) {
  const timer = useRef(null)
  const [comparingCards, setComparingCards] = useState([])
  const [openedCards, setOpenedCards] = useState({})

  const handleCardClick = useCallback((element) => {
    console.log('clicked', element)
    if (comparingCards.length >= 2 || timer.current) return
    setComparingCards([...comparingCards, element])
  })

  useEffect(() => {
    if (comparingCards.length === 2) {
      const [first, second] = comparingCards
      if (first.value === second.value && !openedCards[first.value]) {
        setOpenedCards({
          ...openedCards,
          [first.value]: true
        })
        setComparingCards([])
      } else {
        timer.current = setTimeout(() => {
          setComparingCards([])
          clearTimeout(timer.current)
          timer.current = undefined
        }, delay)
      }
    }
  }, [comparingCards])

    return (
      <div className="board">

        <div className='column'>
          {matrix.map((row, index) =>
          <div key={index} className='row'>
            {row.map((element) =>
              <Card
                element={element}
                key={element.id}
                onClick={handleCardClick}
                show={!!comparingCards.find(elem => elem.id === element.id)}
                opened={!!openedCards[element.value]} />
            )}
          </div>
          )}
        </div>

      </div>
    );
}
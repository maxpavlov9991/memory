import { useCallback, useRef, useState, classNames } from "react"
import './card.css'
import { getImageSrcByValue } from '../../services/images'

export const Card = ({ element, onClick, show, opened, key }) => {

    const src = getImageSrcByValue(element.value)
    console.log(src)

    return opened
    ? <div className="openedCard" key={key}/>
    : <div className="notOpenedCard" key={key}>
    {show
        ? <img className="image showed" src={src} />
        : <div className='image hide' onClick={() => onClick(element)} />
    }
  </div>
}
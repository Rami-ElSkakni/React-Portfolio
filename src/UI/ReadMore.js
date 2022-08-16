import React from 'react'
import { useState } from 'react'

export default function ReadMore({children}) {
    
   const [isReadMore, setIsReadMore] =  useState(false)

    const readMoreHandler = () => {
        setIsReadMore(prevState => !prevState);
    }

    return (
    <span>
        {isReadMore ? children : children.substr(0, 100)}
        <span onClick={readMoreHandler} style = {{color: '#81E6D9', fontWeight: '300', cursor: 'pointer'}}>{isReadMore ? '..Show less' : 'Read More..'}</span>
    </span>
  )
}

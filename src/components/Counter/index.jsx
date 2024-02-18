import React, { useEffect, useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)
    
    useEffect(()=> {
      document.title=`You pressed ${count} times`
    })
    return (
        <div>
            <p>You pressed {count} times</p>
            <button onClick={()=> setCount(count+1)}>Press me</button>
        </div>
    )
}



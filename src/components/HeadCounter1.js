import React, { useState } from 'react'

function HeadCounter1(){
    const [count, setCount] = useState(0)
        return (
          <div>
            <button onClick={() => setCount(count+1)}>
                Count {count}
            </button>
            <button onClick={() => setCount(0)}>
                Reset
            </button>
          </div>
        )
}

export default HeadCounter1
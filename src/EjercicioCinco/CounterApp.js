import React, {useState} from 'react'


export const CounterApp = () => {

    const [value, statevalue] = useState(0)

  return (

    <div>
        <hr></hr>
            <h1>Counter App</h1>
            <h2>{value}</h2>

            <div>

                <button className='btn btn-primary m-5 rounded-pill' onClick={() => statevalue(value + 1)} >+</button>
                <button className='btn btn-primary m-5 rounded-pill' onClick={() => statevalue(0)} >Reset</button>
                <button className='btn btn-primary m-5 rounded-pill' onClick={() => statevalue(value - 1)} >-</button>
                
            </div>

    </div>
  )
}

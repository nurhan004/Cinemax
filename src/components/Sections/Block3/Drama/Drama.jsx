import React from 'react'
import "./Drama.css"
import { drama } from './Drama'

function Drama() {
  return (
    <div>
        {
            drama.map((drama)=>(
                <div key={drama.id}>
                    <img src={drama.img} alt="" />

                </div>
            ))
        }

    </div>
  )
}

export default Drama
import React from 'react'
import "./Horror.css"
import { horror } from './horror'

function Horror() {
  return (
    <div className='HorrorCon'>
              {
                    horror.map((horror)=>(
                        <div className='cardHorror' key={horror.id}>
                            <div class="cardHorror-details">
                            <img class="text-body" src={horror.img} />
                            <h2 class="text-title">{horror.title}</h2>
                            <p class="text-title" >{horror.janr}</p></div>
                            <button class="cardHorror-button">More info</button>
        
        
                        </div>
                    ))
                }
    </div>
  )
}

export default Horror
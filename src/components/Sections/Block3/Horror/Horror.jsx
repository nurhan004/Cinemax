import React from 'react'
import "./Horror.css"
import { horror } from './horror'
import { Link } from 'react-router-dom'

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
                            <button class="cardHorror-button">
                              <Link to={`/horrorFilm/${horror.id}`}>
                              More info
                              
                              </Link>
                              </button>
        
        
                        </div>
                    ))
                }
    </div>
  )
}

export default Horror
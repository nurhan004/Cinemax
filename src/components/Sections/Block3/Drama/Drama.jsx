import React from 'react'
import "./Drama.css"
import { drama } from './Drama'
import { Link } from 'react-router-dom';

function Drama() {
  return (
    <div className='block3Container'>

      {
            drama.map((drama)=>(
                <div className='cardDrama' key={drama.id}>
                    <div class="cardDrama-details">
                    <img class="text-body" src={drama.img} />
                    <h2 class="text-title">{drama.title}</h2>
                    <p class="text-title" >{drama.janr}</p></div>
                    <button class="cardDrama-button">
                      <Link className='watch'  to={`/dramaFilm/${drama.id}`}>
                      Смотреть
                      </Link>
                      </button>


                </div>
            ))
        }

    </div>
  )
}

export default Drama;
import React from 'react'
import "./Komediya.css"
import { komediya } from './komediya'
import { div } from 'framer-motion/client'
import { Link } from 'react-router-dom'

function Komediya() {
  return (
    <div className='KomediyaCon'>
        {
            komediya.map((komediya)=>(
                <div className='cardKomediya' key={komediya.id}>
                <div class="cardKomediya-details">
                <img class="text-body" src={komediya.img} />
                <h2 class="text-title">{komediya.title}</h2>
                <p class="text-title" >{komediya.janr}</p></div>
                <button class="cardKomediya-button">More info</button>
                </div>
                ))
        }
    </div>
  )
}

export default Komediya
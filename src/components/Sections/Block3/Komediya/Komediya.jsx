import React from 'react'
import "./Komediya.css"
import { komediya } from './komediya'
import { div } from 'framer-motion/client'
import { Link } from 'react-router-dom'

function Komediya() {
  return (
    <div>
      <div style={{paddingTop:"100px"}}>
        <h1 style={{color:"white",fontSize:"40px",width:"1200px",margin:"0 auto",justifyContent:"center",fontFamily:"cursive",display:"flex"}}>Комедии</h1>
        {/* <p style={{color:"white",width:"700px",margin:"0 auto",justifyContent:"center",marginTop:"20px",textAlign:"center",fontFamily:"cursive",fontSize:"14px"}}>Комедия — это жанр искусства (литературы, театра, кино и других форм), главной целью которого является развлечение и смешение зрителя или читателя. В комедии используются юмористические ситуации, остроумные диалоги, сатиру, пародию и другие приёмы, вызывающие смех.</p> */}
        </div>
    <div className='KomediyaCon'>

        {
            komediya.map((komediya)=>(
                <div className='cardKomediya' key={komediya.id}>
                <div class="cardKomediya-details">
                <img class="text-body" src={komediya.img} />
                <h2 class="text-title">{komediya.title}</h2>
                <p class="text-title" >{komediya.janr}</p></div>
                <button class="cardKomediya-button">
                  <Link className='watch'  to={`/komediyaFilm/${komediya.id}`}>
                  Смотреть
                  
                  </Link>
                  </button>
                </div>
                ))
        }
    </div>

    </div>
  )
}

export default Komediya
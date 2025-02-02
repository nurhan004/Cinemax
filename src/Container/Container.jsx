import React from 'react'
import "./Container.css"
import Block1 from '../components/Sections/Block1/Block1'
import Block2 from '../components/Sections/Block2/Block2'
import Block3 from '../pages/Home/Block3/Block3'

function Container() {
  return (
    <div className='container'>
      <Block1/>
      <Block2/>
      <Block3/>

    </div>
  )
}

export default Container
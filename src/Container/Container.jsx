import 'react'
import "./Container.css"
import Block1 from '../components/Sections/Block1/Block1'
import Block4 from '../components/Sections/Block4/Block4'
import Block5 from '../components/Sections/Block5/Block5'
import Block2 from '../components/Sections/Block2/Block2'
import Block3 from '../pages/Home/Block3/Block3'

function Container() {
  return (
    <div className='container'>   
      <Block1/>
      <Block2/>
      <Block3/>
      <Block4 />
      <Block5/>
    </div>
  )
}

export default Container
import 'react'
import "./Home.css"
import Block1 from '../../components/Sections/Block1/Block1'
import Block4 from '../../components/Sections/Block4/Block4'
import Block5 from '../../components/Sections/Block5/Block5'
import Block2 from '../../components/Sections/Block2/Block2'
import Block3 from '../../components/Sections/Block3/Block3'


function Home() {
  return (
    <div>
      <Block1/>
      <Block2/>
      <Block3/>
      <Block4/>
      <Block5/>
    </div>
  )
}


export default Home;

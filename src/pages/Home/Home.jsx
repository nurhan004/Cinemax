import 'react'
import "./Home.css"
import Block1 from '../../components/Sections/Block1/Block1'
import Container from '../../Container/Container'
import Block3 from './Block3/Block3'


function Home() {
  return (
    <div>
      <Container>
      <Block1/>
       <Block3 />
    </Container>
    </div>
  )
}

export default Home
import 'react'
import "./Home.css"
import Block1 from '../../components/Sections/Block1/Block1'
import Container from '../../Container/Container'
import Block3 from './Block3/Block3'
import Header from '../../components/Header/Header'
import Block2 from '../../components/Sections/Block2/Block2'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
    <Container>
      <Block1/>
      <Block2/>
      <Block3/>
    </Container>
    </div>
  )
}

export default Home
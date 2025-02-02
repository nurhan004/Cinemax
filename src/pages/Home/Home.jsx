import 'react'
import "./Home.css"
import Block1 from '../../components/Sections/Block1/Block1'
import Container from '../../Container/Container'
import Block4 from '../../components/Sections/Block4/Block4'
import Footer from '../../components/Footer/Footer'
import Block5 from '../../components/Sections/Block5/Block5'




function Home() {
  return (
    <div>
      <Container>
      <Block1/>
      <Block4/>
      <Block5/>
      <Footer/>
    </Container>
    </div>
  )
}

export default Home
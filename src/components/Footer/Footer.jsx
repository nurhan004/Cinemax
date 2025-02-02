import  'react'
import "./Footer.css"



function Footer() {
  return (
    <div className='Footer-Container'>
      <div className='block-footer'>
        <div>
          <h3 className='ji'>Cinemax</h3>
          <p>О нас</p>
          <p>Блог</p>
          <p>Вакансии</p>
          <p>Акции</p>
        </div>
        <div>
          <h3 className='ji'>Помощь</h3>
          <p>Вопросы и ответы</p>
          <p>Контакты</p>
        </div>
        <div>
          <h3 className='ji'>Поддержка</h3>
          <p>Мы всегда готовы вам помочь.</p>
          <p>Наши операторы онлайн 24/7</p>
          <div>
            <button className='button-Footer'>Написать в чате</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
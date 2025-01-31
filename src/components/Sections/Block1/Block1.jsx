import { motion } from "framer-motion"
import { useState } from "react"
import "./Block1.css"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import { Autoplay, EffectFade, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { data } from "../../../data/block1"

function Block1() {
    const [activeIndex, setActiveIndex] = useState(0)

    const fadeInVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }
  
    const backgroundVariants = {
      hidden: { scale: 1.2 },
      visible: { scale: 1 },
    }

  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={true} // Включаем кнопки навигации
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Autoplay, EffectFade, Navigation]} 
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div 
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${item.img})`,
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
              }}
              className="swiper-slide-bg"
              initial="hidden"
              animate={activeIndex === index ? "visible" : "hidden"}
              variants={backgroundVariants}
              transition={{ duration: 1.5 }}
            >
              <motion.div
                className="text-container"
                initial="hidden"
                animate={activeIndex === index ? "visible" : "hidden"}
                variants={fadeInVariants}
                transition={{ duration: 1.7, ease: "easeOut" }}
              >
                <motion.h1 variants={fadeInVariants} transition={{ duration: 1.7 }}>
                  {item.title}
                </motion.h1>
                <motion.p variants={fadeInVariants} transition={{ duration: 1.7, delay: 1.2 }}>
                  {item.dscr}
                </motion.p>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Block1

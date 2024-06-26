import Header from '../../Header'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import { Link } from 'react-router-dom'
import ChatBot from '../../components/ChatBot/ChatBot'

const MainPage = () => {
  return (
    <>
      <Header />
    <div className='main-page'>
      <Link to="/catalog" className='promo'>
        <p>
        20% OFF ON SWIMMING EQUIPMENT
        </p>
      </Link>
    </div>
      <ChatBot/>
    </>
  )
}

export default MainPage

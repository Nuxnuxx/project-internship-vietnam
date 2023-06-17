import Header from '../../Header'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import { Link } from 'react-router-dom'

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
    </>
  )
}

export default MainPage

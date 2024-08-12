
import React, { useCallback, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Places.css'
import european_1 from '../../assets/european-1.png'
import european_2 from '../../assets/european-2.png'
import european_3 from '../../assets/european-3.png'
import european_4 from '../../assets/european-4.png'
import european_5 from '../../assets/european-5.png'
import european_6 from '../../assets/european-6.png'
import asia_1 from '../../assets/asia-1.png'
import asia_2 from '../../assets/asia-2.png'
import asia_3 from '../../assets/asia-3.png'
import asia_4 from '../../assets/asia-4.png'
import asia_5 from '../../assets/asia-5.png'
import asia_6 from '../../assets/asia-6.png'
import canada_1 from '../../assets/canada-1.png'
import canada_2 from '../../assets/canada-2.png'
import canada_3 from '../../assets/canada-3.png'
import canada_4 from '../../assets/canada-4.png'
import canada_5 from '../../assets/canada-5.png'
import canada_6 from '../../assets/canada-6.png'
import world_1 from '../../assets/world-1.png'
import world_2 from '../../assets/world-2.png'
import world_3 from '../../assets/world-3.png'
import world_4 from '../../assets/world-4.png'
import world_5 from '../../assets/world-5.png'
import world_6 from '../../assets/world-6.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons'



const Places = () => {
    const [selectedFilter, setSelectedFilter] = useState('European')
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
    const Place = {
      European: [
        { name: 'Paris, France', image: european_1, priceRange: '₹82,000 - ₹1,80,000', days: '4-6' },
        { name: 'Amsterdam, Netherlands', image: european_2, priceRange: '₹73,000 - ₹1,45,000', days: '4-6' },
        { name: 'Barcelona, Spain', image: european_3, priceRange: '₹90,000 - ₹1,65,000', days: '5-7' },
        { name: 'Rome, Italy', image: european_4, priceRange: '₹85,000 - ₹1,60,000', days: '4-6' },
        { name: 'Vienna, Austria', image: european_5, priceRange: '₹75,000 - ₹1,40,000', days: '4-6' },
        { name: 'Prague, Czech Republic', image: european_6, priceRange: '₹70,000 - ₹1,30,000', days: '3-5' },
    ],
    Asia: [
        { name: 'Bali, Indonesia', image: asia_1, priceRange: '₹66,000 - ₹1,25,000', days: '4-6' },
        { name: 'Bangkok, Thailand', image: asia_2, priceRange: '₹50,000 - ₹1,00,000', days: '4-6' },
        { name: 'Tokyo, Japan', image: asia_3, priceRange: '₹1,00,000 - ₹1,65,000', days: '5-7' },
        { name: 'Seoul, South Korea', image: asia_4, priceRange: '₹80,000 - ₹1,40,000', days: '4-6' },
        { name: 'Singapore', image: asia_5, priceRange: '₹70,000 - ₹1,20,000', days: '3-5' },
        { name: 'Hanoi, Vietnam', image: asia_6, priceRange: '₹55,000 - ₹1,00,000', days: '4-6' },
    ],
    Canada: [
        { name: 'Montreal, Quebec', image: canada_1, priceRange: '₹12,000 - ₹21,000', days: '4-6' },
        { name: 'Quebec City, Quebec', image: canada_2, priceRange: '₹16,000 - ₹24,000', days: '3-5' },
        { name: 'Vancouver, British Columbia', image: canada_3, priceRange: '₹16,000 - ₹24,000', days: '5-7' },
        { name: 'Toronto, Ontario', image: canada_4, priceRange: '₹18,000 - ₹26,000', days: '4-6' },
        { name: 'Ottawa, Ontario', image: canada_5, priceRange: '₹15,000 - ₹22,000', days: '3-5' },
        { name: 'Calgary, Alberta', image: canada_6, priceRange: '₹14,000 - ₹23,000', days: '5-7' },
    ],
    World: [
        { name: 'Istanbul, Turkey', image: world_1, priceRange: '₹66,000 - ₹1,25,000', days: '4-6' },
        { name: 'Rio de Janeiro, Brazil', image: world_2, priceRange: '₹82,000 - ₹1,45,000', days: '5-7' },
        { name: 'Sydney, Australia', image: world_3, priceRange: '₹1,25,000 - ₹2,08,000', days: '5-7' },
        { name: 'Cape Town, South Africa', image: world_4, priceRange: '₹95,000 - ₹1,70,000', days: '5-7' },
        { name: 'New Delhi, India', image: world_5, priceRange: '₹60,000 - ₹1,20,000', days: '4-6' },
        { name: 'Dubai, UAE', image: world_6, priceRange: '₹70,000 - ₹1,30,000', days: '4-6' },
    ],
    };

    const handleFilterChange = (value) => {
      setSelectedFilter(value);
  };

  const handleResize = useCallback(() => {
      setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, [handleResize]);

  return (
     <section className="bg-color section-padd" id='places'>
        <div className="container">
        <div className="title place-heading">
            <h4>Places</h4>
            <span className='line'></span>
        </div>
        <h2 className='title-padd text-center'>We Provide World Best
        Destinations for you</h2>
        <div className="filter-container">
            
        {isMobile ? (
                        <div className="filter-buttons">
                            <select onChange={(e) => handleFilterChange(e.target.value)} value={selectedFilter}>
                                <option value="European">European</option>
                                <option value="Asia">Asia</option>
                                <option value="Canada">Canada</option>
                                <option value="World">World</option>
                            </select>
                        </div>
                    ) : (
                        <div className="filter-btn-secondary">
                            <button
                                className={`filter-btn ${selectedFilter === 'European' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('European')}
                            >
                                European
                            </button>
                            <button
                                className={`filter-btn ${selectedFilter === 'Asia' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('Asia')}
                            >
                                Asia
                            </button>
                            <button
                                className={`filter-btn ${selectedFilter === 'Canada' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('Canada')}
                            >
                                Canada
                            </button>
                            <button
                                className={`filter-btn ${selectedFilter === 'World' ? 'active' : ''}`}
                                onClick={() => handleFilterChange('World')}
                            >
                                World
                            </button>
                        </div>
                    )}
            
        </div>
        <div className="tourist-place-container">
        <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: '.next-arrow',
        prevEl: '.prev-arrow',
      }}
      breakpoints={{
        
        576: {
          slidesPerView: 2,
        },
        
        768: {
          slidesPerView: 3,
        },
        
        1024: {
          slidesPerView: 3,
        },
        
        1200: {
          slidesPerView: 3,
        },
      }}
    >
                        {Place[selectedFilter].map((place, index) => (
                            <SwiperSlide key={index}>
                                <div className="place-card">
                                    <img className="place-img" src={place.image} alt={place.name} />
                                    <div className="place-info">
                                        <h4>{place.name}</h4>
                                        <p>{place.priceRange}</p>
                                        <p>Days: {place.days}</p>
                                        <div className="ratings">
                                            <span><FontAwesomeIcon icon={faStar} /></span>
                                            <span><FontAwesomeIcon icon={faStar} /></span>
                                            <span><FontAwesomeIcon icon={faStar} /></span>
                                            <span><FontAwesomeIcon icon={faStar} /></span>
                                            <span><FontAwesomeIcon icon={faStar} /></span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
             <div className="custom-nav">
                    <span className='prev-arrow'><FontAwesomeIcon icon={faArrowLeft} /></span>
                    <span className='next-arrow'><FontAwesomeIcon icon={faArrowRight} /></span>
                    </div>
                </div>
        </div>
     </section>
  )
}

export default Places
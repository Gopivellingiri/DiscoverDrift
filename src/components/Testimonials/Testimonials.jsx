import React from 'react'
import './Testimonials.css'
import Testimonial_img from '../../assets/testimonial-img.png'
import jessica_img from '../../assets/jessica-img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Testimonials = () => {
  return (
    <section className="section-padd bg-color">
        <div className="container">
            <div className="testimonial-container">
              <div className="testimonial-part">
              <div  className="testimonial-content">
                  <div className="title testimonial-heading">
                    <h4>Real travelers Stories</h4>
                    <span className='line'></span>
                  </div>
                  <h2 className='title-padd'>What Our Travelers Say</h2>
                  <Swiper
                         modules={[Pagination, Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                       
                        navigation={{
                            nextEl: '.next-arrow',
                            prevEl: '.prev-arrow',
                        }} className="testimonial-client">
                    <SwiperSlide>
                    <div className="testimonial-card">
                    <div className="client">
                    <div className="client-img">
                    <img src={jessica_img} alt="" />
                    <div className="client-name">
                      <span className='name'>Jessica</span>
                      <span>Graphic Designer</span>
                    </div>
                    </div>
                    <div className="stars">
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                    </div>
                    </div>
                    <div className="client-text">
                      <p>I had the most amazing time exploring Kyoto with Discover Drift. The recommendations were spot-on, and the guide was incredibly knowledgeable. Every detail was taken care of, making the trip seamless and enjoyable. I can't wait for my next adventure!</p>
                    </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="testimonial-card">
                    <div className="client">
                    <div className="client-img">
                    <img src={jessica_img} alt="" />
                    <div className="client-name">
                      <span className='name'>Sarah Thompson</span>
                      <span>Marketing Executive</span>
                    </div>
                    </div>
                    <div className="stars">
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                    </div>
                    </div>
                    <div className="client-text">
                      <p>Our trip to Bali was absolutely unforgettable! The local guides were incredibly knowledgeable and friendly, making every day an adventure. From exploring lush rice terraces to relaxing on beautiful beaches, every moment was magical. Highly recommend for anyone looking for a tropical escape!</p>
                    </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="testimonial-card">
                    <div className="client">
                    <div className="client-img">
                    <img src={jessica_img} alt="" />
                    <div className="client-name">
                      <span className='name'> Michael Chen</span>
                      <span>Software Engineer</span>
                    </div>
                    </div>
                    <div className="stars">
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                    </div>
                    </div>
                    <div className="client-text">
                      <p>Paris was everything we hoped for and more. The itinerary was perfectly curated to include iconic landmarks, charming cafes, and hidden gems. The cultural experiences were enriching, and the accommodations were top-notch. This trip truly exceeded our expectations!</p>
                    </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="testimonial-card">
                    <div className="client">
                    <div className="client-img">
                    <img src={jessica_img} alt="" />
                    <div className="client-name">
                      <span className='name'> Emily Johnson</span>
                      <span>Freelance Writer</span>
                    </div>
                    </div>
                    <div className="stars">
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                      <FontAwesomeIcon className='icon' icon={faStar}/>
                    </div>
                    </div>
                    <div className="client-text">
                      <p>Our experience in Kyoto was nothing short of extraordinary. The blend of traditional temples and modern amenities was stunning. The local recommendations for dining and sightseeing made our stay memorable. We felt immersed in the culture, and it was a trip we will cherish forever.</p>
                    </div>
                    </div>
                    </SwiperSlide>

                  </Swiper>
                  <div className="testimonial-custom-nav">
                    <span className='prev-arrow'><FontAwesomeIcon icon={faArrowLeft} /></span>
                    <span className='next-arrow'><FontAwesomeIcon icon={faArrowRight} /></span>
                    </div>
              </div>
              </div>
              <div className="testimonial-bg-img">
                <img src={Testimonial_img} alt="" />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials